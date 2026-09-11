var db = require("../db/db");
var util = require("util")
const query = util.promisify(db.query).bind(db);

module.exports.CheckAdmin = async(email) => {
    var Query = `select * from products where a_email = ?`;
    var data = await query(Query,[email]);
    return data;
};

module.exports.OrderList = async() => {
    var Query = `select * from orders`;
    var data = await query(Query);
    return data;
};