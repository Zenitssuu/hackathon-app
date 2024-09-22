import jwt from "jsonwebtoken";

export const userAuth = (req, res, next) => {
  const auth = req.headers["authorization"]
  if (!auth) {
    return res.status(401).json({ message: "unauthorized" });
  }
  try {
    const decode = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({ message: "unauthorized" });
  }
};
