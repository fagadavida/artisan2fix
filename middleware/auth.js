const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token;
  let decoded;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRETE);
    req.user = decoded;

    return next();
  } catch (err) {
    return res.status(401).send(`Invalid Token: ${decoded}`);
  }
};

module.exports = auth;
