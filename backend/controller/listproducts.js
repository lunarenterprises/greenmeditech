var model = require("../model/listproducts");

module.exports.ListProduct = async(req,res) => {
    try {
        var search = req.body.search;
        if (search) {
            condition = ` and product_name like '${search}%'`
          }
        let productlist = await model.ProductList();
        if(productlist.length > 0){
            return res.send({
                result:true,
                message:"Data retrived successfully",
                productlist:productlist
            })
        }else{
            return res.send({
                result:false,
                message:"Data not found"
            })
        }
    } catch (error) {
        return res.send({
            result:false,
            message:error.message
        })
    }
};