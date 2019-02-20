const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.gooogleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have a record of the existing user's profile ID
          done(null, existingUser);
        } else {
          // we don't have a record of the user record with this ID
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
      //console.log("Profile: ", profile.id);
    }
  )
);
