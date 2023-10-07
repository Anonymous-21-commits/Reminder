const MailService = require("../services/email_service");
const create = async (req, res) => {
  try {
    const response = await new MailService().createMail(req.body);
    return res.status(200).json({
      success: true,
      response: response,
      message: "Successfully registered an email reminder",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      err: { err },
      message: "unable to register an email reminder",
    });
  }
};
module.exports = create;
