const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = newSchema({
  googleID: String
});

mongoose.model("users", userSchema);
