const Mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectID, ref: "User" }, // set up a relationship field with the user collection
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("survey", surveySchema);
