import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUp = async (req, res) => {
  try {
    console.log(req.body);

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "all feilds required" });
    }

    const existsUser = await User.findOne({ email });

    if (existsUser) {
      console.log(existsUser);

      return res.status(500).json({ message: "user already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashPassword,
    });

    // newUser.password = hashPassword;

    // await User.save();

    return res
      .status(200)
      .json({ message: "created successfully", data: newUser });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: error.message });
  }
};
const signIn = async (req,res) => {
  try {
    // console.log(req.body);

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "all feilds required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      // console.log(existsUser);

      return res.status(500).json({ message: "user does not exists" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(500).json({ message: "incorrect passowrd" });
    }

    const jwtToken = jwt.sign({ email, password }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    // newUser.password = hashPassword;

    // await User.save();

    return res
      .status(200)
      .json({ message: "login successfully", token: jwtToken, email: email });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: error.message });
  }
};
const login = async () => {};

export { signUp, signIn, login };
