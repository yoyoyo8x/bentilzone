import User from "../models/user.js";
import { signInValid, signUpValid } from "../validation/user.js";
import bcrypyjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { SECRET_CODE } = process.env;

export const signUp = async (req, res) => {
  try {
    // check validation
    const { name, email, password } = req.body;
    const { error } = signUpValid.validate(req.body, { abortEarly: true });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    // check email
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "Nguoi dung da duoc dang ky",
      });
    }
    // bcrypyjs password
    const hashedPassword = await bcrypyjs.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    // create successfully
    user.password = undefined;
    return res.status(200).json({
      message: "Tao tai khoan thanh cong",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    // check validation
    const { email, password } = req.body;
    const { error } = signInValid.validate(req.body, { abortEarly: true });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(500).json({
        message: errors,
      });
    }
    // check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Khong tim thay nguoi dung",
      });
    }
    // check pass
    const isMatch = await bcrypyjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Mat khau khong dung",
      });
    }
    // create jwt
    const token = jwt.sign({ id: user.id }, SECRET_CODE, { expiresIn: "1d" });
    console.log(token);
   
    // access successfully
    user.password = undefined;
    return res.status(200).json({
      message: "Dang nhap thanh cong",
      user: user,
      accessToken: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
