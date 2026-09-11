var model = require("../model/login");
var bcrypt = require("bcrypt");

module.exports.Login = async (req, res) => {
  try {
    let password = req.body.password;
    let email = req.body.email;

    if (
      !password ||
      !email
    ) {
      return res.send({
        result: false,
        message: language.insufficient_parameters,
      });
    }
    let CheckUser = await model.CheckUserQuery(email);
    if (CheckUser.length > 0) {
      let Checkpassword = await bcrypt.compare(
        password,
        CheckUser[0].a_passwd
      );
      if (Checkpassword == true) {
      
        
        return res.send({
          result: true,
          message:"logged_in",
          user_id: CheckUser[0].p_id,
          user_name: CheckUser[0].a_name,
          user_email: CheckUser[0].a_email,
          user_role: CheckUser[0].a_role,
        })
      } else {
        return res.send({
          result: false,
          message:"wrong credential"
        });
      }
    } else {
      return res.send({
        result: false,
        message:"email not registered",
      });
    }
  } catch (error) {
    return res.send({
      result: false,
      message: error.message,
    });
  }
};
