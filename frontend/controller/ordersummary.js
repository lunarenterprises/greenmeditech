var model = require("../model/ordersummary");

module.exports.OrderSummary = async (req, res) => {
    try {
        var email = req.body.email;
        let checkadmin = await model.CheckAdmin(email);
        if (checkadmin.length > 0) {
            let orderlist = await model.OrderList();
            var confirmed = 0;
            var pending = 0;
            var cancelled = 0;
            var data = await Promise.all(orderlist.map(async (el) => {
                if (el.o_status == 'confirmed') {
                    confirmed += 1
                }
                if (el.o_status == 'pending') {
                    pending += 1
                }
                if (el.o_status == 'cancelled') {
                    cancelled += 1
                }


            }))

            let array = [{
                confirmed: confirmed,
                pending: pending,
                cancelled: cancelled
            }]
            return res.send({
                result: true,
                data: array
            })
        } else {
            return res.send({
                result: false,
                message: "Try with admin level account"
            })
        }
    } catch (error) {
        return res.send({
            result: false,
            message: error.message
        })
    }
};