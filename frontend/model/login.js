var db = require("../db/db");
var util = require("util")
const query = util.promisify(db.query).bind(db);

module.exports.CheckUserQuery = async (email) => {
  var Query = `select * from products where a_email = ? and a_status = 'active'`;
  var data = query(Query, [email]);
  return data;
};

