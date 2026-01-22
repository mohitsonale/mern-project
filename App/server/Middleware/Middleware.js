const jwt = require("jsonwebtoken");
const userModel = require("../models/model.user");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token; 
    if (!token) {
      return res.status(401).send({ success: false, message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    req.user = user; 
    next();

  } catch (error) {
    return res.status(401).send({ success: false, message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
