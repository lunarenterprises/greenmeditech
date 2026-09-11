var model = require("../model/viewproduct");

module.exports.ViewProduct = async(req, res) => {
    try {
        var product_id = req.body.product_id;
        let productview = await model.ProductView(product_id);
        if(productview.length > 0){
            return res.send({
                result:true,
                message:"Data retrived successfully",
                productlist:productview
            })
        }else{
            return res.send({
                result:false,
                message:"No data found"
            })
        }
    } catch (error) {
        return res.send({
            result:false,
            message:error.message
        })
    }
};
