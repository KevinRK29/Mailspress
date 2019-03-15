const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("./api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title, //title: title reduced to title due to ES6
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })), //  => {return {email: email}) condensed
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};
