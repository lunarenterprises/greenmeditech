var db = require("../db/db");
var util = require("util")
const query = util.promisify(db.query).bind(db);

module.exports.CheckUser = async(email) => {
    var Query = `select * from products where a_email = ?`;
    var data = await query(Query,[email]);
    return data;
};

module.exports.Stock = async() => {
    var Query = `select p_name, p_stock from products where p_id != 1 and p_status = 'active'`;
    var data = await query(Query);
    return data;
};
