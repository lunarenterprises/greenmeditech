var db = require("../db/db");
var util = require("util")
const query = util.promisify(db.query).bind(db);

module.exports.StockList = async(product_id) => {
    var Query = `select * from products where p_id = ?`
    var data = await query(Query,[product_id]);
    return data;
};


module.exports.updatestock = async(newquantity, product_id) => {
    var Query = `UPDATE products
SET p_stock = ?
WHERE p_id = ?`;
    var data = await query(Query,[newquantity, product_id]);
    return data;
};

module.exports.Addorder = async(name,address,phn_number,product_id) => {
    var Query = `insert into orders(o_user_name,o_user_address,o_user_phone_number,o_product_id)values(?,?,?,?)`;
    var data = await query(Query,[name,address,phn_number,product_id]);
    return data;
};