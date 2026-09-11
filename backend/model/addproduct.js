var db = require("../db/db");
var util = require("util")
const query = util.promisify(db.query).bind(db);

module.exports.CheckAdmin = async(user_id) =>{
    var Query = `select * from products where a_email = ? and a_role = 'admin'`;
    var data = await query(Query,[user_id]);
    return data;
};

module.exports.CheckProduct = async(product_name) => {
    var Query = `select * from products where p_name = ?`;
    var data = await query(Query,[product_name]);
    return data;
};

module.exports.ProductAdd = async(product_name,product_description,image,product_price,product_stock) => {
    var Query =`INSERT INTO products (p_name,p_description,p_image,price,p_stock)
VALUES (?,?,?,?,?)`;
    var data = await query(Query,[product_name,product_description,image,product_price,product_stock]);
    return data;
};
