var model = require("../model/productstock");
module.exports.ProductStock = async (req, res) => {
    try {
        var email = req.body.email;
        let checkuser = await model.CheckUser(email);
        if (checkuser.length > 0) {
            let stock = await model.Stock();
            if (stock.length > 0) {
                return res.send({
                    result:true,
                    message:"data retrived",
                    stock: stock
                })
            }else{
                return res.send({
                    result:false,
                    message:"data not found"
                })
            }
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