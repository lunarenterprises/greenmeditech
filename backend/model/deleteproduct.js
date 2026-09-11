var db = require("../db/db");
var util = require("util")
const query = util.promisify(db.query).bind(db);


module.exports.CheckAdmin = async(mail_id) => {
    var Query = `select * from products where a_email = ? `;
    var data = await query(Query,[mail_id]);
    return data;
};

module.exports.ProductDelete = async(product_id) => {
    var Query = `UPDATE products
SET p_status = 'removed'
WHERE p_id = ?;`;
    var data = await query(Query,[product_id]);
    return data;
};


module.exports.CheckProduct = async(product_id) => {
    var Query = `select * from products where p_id = ? and p_status = 'active'`;
    var data = await query(Query,[product_id]);
    return data;
};