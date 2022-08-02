import passport, { use } from "passport";

import passportJWT, { Strategy } from "passport-jwt";

import  User from "../models/user.model";

var JwtStrategy = passportJWT.Strategy;
var ExtractJwt = passportJWT.ExtractJwt;

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secrect'
},
  function (jwtPayload: any, done: any) {
    return User.findOne({ id: jwtPayload.id }, function (err: any, user: any) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      }
      else {
        return done(null, false);
      }
    });
  }));