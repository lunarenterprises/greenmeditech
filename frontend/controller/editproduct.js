var model = require("../model/editproduct");
var formidable = require("formidable")
var fs  = require("fs")

module.exports.EditProduct = async (req, res) => {
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
            var product_id = fields.product_id;
            var product_name = fields.product_name;
            var product_description = fields.product_description;
            var product_price = fields.product_price;
            var product_stock = fields.product_stock
            let checkadmin = await model.CheckAdmin(user_email)
            console.log(user_email);
            if (checkadmin.length > 0) {
                let condition = ``;
                if (product_name) {
                    if (condition == '') {
                        condition = ` set p_name = '${product_name}'`
                    } else {
                        condition += ` ,p_name = '${product_material}'`
                    }
                }
                if (product_description) {
                    if (condition == '') {
                        condition = ` set p_description = '${product_description}'`
                    } else {
                        condition += ` ,p_description = '${product_description}'`
                    }
                }
                if (product_price) {
                    if (condition == '') {
                        condition = ` set price = '${product_price}'`
                    } else {
                        condition += ` ,price = '${product_price}'`
                    }
                }
                if (product_stock) {
                    if (condition == '') {
                        condition = ` set p_stock = '${product_stock}'`
                    } else {
                        condition += ` ,p_stock = '${product_stock}'`
                    }
                }
                let checkproduct = await model.CheckProduct(product_name);
                if (checkproduct.length == 0) {
                    // console.log(files, "s.dkjvhasdkvna/skdvnadslkv/adsklv");

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
                                    if (filepathh) {
                                        if (condition == '') {
                                            condition = ` set p_image = '${filepathh}'`
                                        } else {
                                            condition += ` ,p_image = '${filepathh}'`
                                        }  
                                    }
                                let productadd = await model.ChangeProduct(product_id, condition)

                            })
                    
                        return res.send({
                            result: true,
                            message: "Product updated successfully"
                        })
                    } else {
                        if (condition !== '') {
                            let changeproduct = await model.ChangeProduct(product_id, condition)
                        }
                        return res.send({
                            result: true,
                            message: "Product updated successfully"
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