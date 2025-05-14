import jwt from "jsonwebtoken"; // Add this import statement

const authDoctor = async (req, res, next) => {
  const { dToken } = req.headers;

  if (!dToken) {
    return res.json({ success: false, message: "Not Authorized, Login Again" });
  }

  try {
    const decoded = jwt.verify(dToken, process.env.JWT_SECRET); // Using jwt.verify here
    req.body.docId = decoded.id; // Attach doctor ID to request body
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authDoctor;
