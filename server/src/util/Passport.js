import { Strategy } from "passport-local";

export const check = () => {
  return new Strategy(async (email, password, done) => {
    try {
      const user = await User.find({ email });

      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }

      const isPasswordMatch = user.password === password ? true : false;

      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect Password" });
      }
    } catch (error) {
      return done(err);
    }
  });
};
