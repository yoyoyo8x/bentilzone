import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
dotenv.config();

const { SECRET_CODE } = process.env;

export const checkPermission = async (req, res, next) => {
  try {
    // find token from headers
    const bearToken = req.headers.authorization;
    if (!bearToken) {
      throw new Error("Bạn chưa đăng nhập");
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Token rỗng!");
    }
    // decoded token
    const decoded = jwt.verify(token, SECRET_CODE);
    // find user from token.payload that decoded
    const user = await User.findById(decoded.id);

    // check permission
    if (!user || user.role !== "admin") {
      throw new Error(" Ban khong duoc cap quyen");
    }
    // you can do it
    next();
  } catch (error) {
    return res.status(401).json({
      message: error.message || "Bạn không có quyền",
    });
  }
};
