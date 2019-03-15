const Mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = {
  email: String,
  responded: { type: boolean, default: false }
};

module.exports = recipientSchema;
