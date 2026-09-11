var db = require("../db/db");
var util = require("util")
const query = util.promisify(db.query).bind(db);

module.exports.checkadmin = async(email) => {
    var Query = `select * from products where a_email = ?`;
    var data = await query(Query,[email]);
    return data;
};

module.exports.ListOrder = async() => {
    var Query = `select o.o_id, o.o_product_id, p.p_name, o.o_status, o.o_user_name, o.o_user_address, o.o_user_phone_number 
    from orders o
    INNER JOIN products p ON o.o_product_id = p.p_id`;
    var data = await query(Query);
    return data;
};