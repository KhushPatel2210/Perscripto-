import jwt from "jsonwebtoken"; // Use import instead of require

const authUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Ensure req.body is initialized before accessing it
    if (!req.body) {
      req.body = {};
    }

    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export default authUser;
