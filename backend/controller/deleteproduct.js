var model = require("../model/deleteproduct");

module.exports.DeleteProduct = async (req, res) => {
    try {
        var product_id = req.body.product_id;
        var mail_id = req.body.mail_id;
        let checkadmin = await model.CheckAdmin(mail_id);
        console.log(checkadmin.lenght,"awjldhfcaldsjhfbadsvhjadbliahbfalgij");
        if (checkadmin.length > 0) {
            let checkproduct = await model.CheckProduct(product_id);
            if (checkproduct.length > 0) {
                let productdelete = await model.ProductDelete(product_id)
                if (productdelete.affectedRows > 0) {
                    return res.send({
                        result: true,
                        message: "Product removed successfully"
                    })
                } else {
                    return res.send({
                        result: false,
                        message: "Failde to remove product"
                    })
                }
            }else{
                return res.send({
                    result:false,
                    message:"Product does not exist"
                })
            }
        } else {
            return res.send({
                result: false,
                message: "Try with admin level account"
            }
            )
        }
    } catch (error) {
        return res.send({
            result: false,
            message: error.message
        })
    }
};