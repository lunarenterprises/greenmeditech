var model = require("../model/addproduct");
var formidable = require("formidable")
var fs  = require("fs")

module.exports.AddProduct = async (req, res) => {
    try {
        var form = new formidable.IncomingForm({ multiples: true });
        form.parse(req, async function (err, fields, files) {
            if (err) {
                return res.send({
                    success: false,
                    message: "File Upload Failed!",
                    data: err,
                });
            }
            var user_email = fields.user_email;
            var product_name = fields.product_name;
            var product_description = fields.product_description;
            var product_price = fields.product_price;
            var product_stock = fields.product_stock
            console.log(product_name, product_description, product_price, product_stock);
            if (!product_name || !product_description || !product_price || !product_stock) {
                return res.send({
                    result: false,
                    message: "insufficient parameters"
                })
            }
            let checkadmin = await model.CheckAdmin(user_email)
            if (checkadmin.length > 0) {
                if (files.length == 0) {
                    return res.send({
                        result: false,
                        message: "Image file not found"
                    })
                }
                let checkproduct = await model.CheckProduct(product_name);
                if (checkproduct.length == 0) {
                    console.log(files, "s.dkjvhasdkvna/skdvnadslkv/adsklv");

                    if (Object.values(files).length > 0) {
                            var oldPath = files.image.filepath;
                            var newPath =
                                process.cwd() +
                                "/uploads/product/" +
                                files.image.originalFilename;

                            let rawData = fs.readFileSync(oldPath);
                            // console.log(newPath, "new");bgh,jnhyt7u
                            fs.writeFile(newPath, rawData, async function (err) {
                                if (err) console.log(err);
                                let filepathh =
                                    "uploads/product/" + files.image.originalFilename;
                                let productadd = await model.ProductAdd(product_name, product_description, filepathh, product_price,product_stock);

                            })
                    
                        return res.send({
                            result: true,
                            message: "Product added successfully"
                        })
                    } else {
                        return res.send({
                            result: false,
                            message: "image not found pls check the image file"
                        })
                    }


                } else {
                    return res.send({
                        result: false,
                        message: "Product already exists"
                    })
                }

            } else {
                return res.send({
                    return: false,
                    message: "Try with an admin level account"
                })
            }
        })


    } catch (error) {
        return res.send({
            result: false,
            message: error.message
        })
    }
};
