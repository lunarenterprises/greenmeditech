var model = require("../model/orderlist");

module.exports.OrderList = async(req,res) => {
    try {
        var email = req.body.email;
        let checkadmin = await model.checkadmin(email);
        // console.log(checkadmin.length);
        if(checkadmin.length > 0 ){
            let listorder = await model.ListOrder();
            // console.log(listorder.length);
            if(listorder.length > 0 ){
                return res.send({
                    result:true,
                    message:"Data retrived",
                    orderlist:listorder
                })
            }else{
                return res.send({
                    result:false,
                    message:"data not found"
                })
            }
        }else{
            return res.send({
                result:false,
                message:"Try with admin level account"
            })
        }
    } catch (error) {
        return res.send({
            result:false,
            message:error.message
        })
    }
};