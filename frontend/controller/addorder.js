var model = require("../model/addorder");
const accountSid = 'AC028898071dd4f1be77b4ade52ee3fb13';
const authToken = '678eb0b9c337618f49fa4a08e12fcce7';
const client = require('twilio')(accountSid, authToken);
var moment = require('moment')
var axios = require('axios')

module.exports.AddOrder = async (req, res) => {
    try {
        var name = req.body.name;
        var address = req.body.address;
        var phn_number = '91' +req.body.phn_number;
        var product_id = req.body.product_id;
        var quantity = req.body.quantity;
        var product_name = req.body.product_name;
        if (!name || !address || !phn_number || !product_id || !quantity) {
            return res.send({
                result: false,
                message: "Insufficient parameters"
            })
        }
        let stocklist = await model.StockList(product_id);
        console.log(stocklist[0].p_stock);
        let new_quantity = stocklist[0].p_stock - quantity;
        console.log(new_quantity);
        let updatestock = await model.updatestock(new_quantity, product_id);
        let updateorder = await model.Addorder(name, address, phn_number, product_id);

        // console.log(phn_number, "ddaddadaddadddddddd");
        if (updateorder.affectedRows > 0) {
            var url = 'https://graph.facebook.com/v20.0/397310920127929/messages';
            var token = 'EABwi5MvKVGwBOzXrAlsuZAxrikxY3dRzbmKmPkeSYl8FAZAx0WvKuxs81237cltOVrZBe0hbLtTkX02MDm70oQ30BcgGbzNiwInSt2h4YKjz06zPrZBY5nFfeaUe8eeKLYD4qQ1YVk5pFzVyxgk4EaZBbSpwbQ9uTge73XxNFEkEGoCps5PpwZAeQUCZCZCBipSZAMQZDZD';
            var productName = stocklist[0].p_name
            var productPrice = stocklist[0].price
            var orderId = 'EB' + updateorder.insertId
            var orderDate = moment().format('DD-MM-YYYY')
            var storeName = `Eveline Boutique`
            let array = [
                {
                    messaging_product: 'whatsapp',
                    to: phn_number,
                    type: 'template',
                    template: {
                        name: `customer`,
                        language: {
                            code: "en"
                        },
                        "components": [
                            {
                                "type": "body",
                                "parameters": [
                                    { type: 'text', text: '' + productName + '' }, // Replace with actual value
                                    { type: 'text', text: '' + quantity + '' }, // Replace with actual value
                                    { type: 'text', text: '' + productPrice + '' }, // Replace with actual value
                                    { type: 'text', text: '' + orderId + '' }, // Replace with actual value
                                    { type: 'text', text: '' + orderDate + '' }, // Replace with actual value
                                    { type: 'text', text: 'GREENMEDIBIOTECH' } // Replace with actual value
                                ]
                            }
                        ]
                    }
                },
                {
                    messaging_product: 'whatsapp',
                    to: '916238165384',
                    type: 'template',
                    template: {
                        name: `admin`,
                        language: {
                            code: "en"
                        },
                        "components": [
                            {
                                "type": "body",
                                "parameters": [
                                    { type: 'text', text: '' + name + '' }, // Replace with actual value
                                    { type: 'text', text: '' + phn_number + '' }, // Replace with actual value
                                    { type: 'text', text: '' + address + '' }, // Replace with actual value
                                    { type: 'text', text: '' + productName + '' }, // Replace with actual value
                                    { type: 'text', text: '' + quantity + '' }, // Replace with actual value
                                    { type: 'text', text: '' + productPrice + '' }, // Replace with actual value
                                    { type: 'text', text: '' + orderId + '' }, // Replace with actual value
                                    { type: 'text', text: '' + orderDate + '' } // Replace with actual value
                                ]
                            }
                        ]
                    }
                }
            ]
            array.forEach(async (element) => {
                var response = await axios.post(url, element, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data, "reponse");
            });


            return res.send({
                result: true,
                message: "Order placed.Please check your whatsapp for more details"
            })


        }
    } catch (error) {
        return res.send({
            result: false,
            message: error.message
        })
    }
};