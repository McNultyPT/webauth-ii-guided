const jwt = require("jsonwebtoken");
const secrets = require("../secret/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json("Invalid credentials.");
      } else {
        req.decodedJwt = decodedToken;
        console.log("decoded token", req.decodedJwt);
        next();
      }
    });   
  } else {
    // no token
    res.status(401).json('none shall pass!')
  }
};
