var db = require("../db/db");
var util = require("util");
const query = util.promisify(db.query).bind(db);

module.exports.CheckProduct = async (product_id) => {
    var Query = `select * from products where p_id = ? and p_status = 'active'`;
    var data = query(Query, [product_id]);
    return data;
};
module.exports.CheckAdmin = async (user_email) => {
    var Query = `select * from products where a_email = ?`;
    var data = query(Query, [user_email]);
    return data;
};

module.exports.ChangeProduct = async (product_id, condition) => {
    var Query = `update products ${condition} where p_id = ?`;
    var data = query(Query, [product_id]);
    return data;
};