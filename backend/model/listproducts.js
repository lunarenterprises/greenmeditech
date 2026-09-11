var db = require("../db/db");
var util = require("util")
const query = util.promisify(db.query).bind(db);

module.exports.ProductList = async() => {
    var Query = `SELECT * FROM products
WHERE p_id != 1 and p_status = 'active'`;
    var data = await query(Query);
    return data;
};