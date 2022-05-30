const jwt = require("jsonwebtoken");
const config = require("config");

const generateAuthToken = (data) => {
  const token = jwt.sign({ data }, config.get("jwtPrivateKey"), {
    expiresIn: "1h",
  });

  return token;
};

const auth = (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (token == undefined) {
      return res.send("not defined");
    }

    const decode = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decode;
    next();
  } catch (err) {
    logger.error(err);
  }
};
module.exports = {
  generateAuthToken,
  auth,
};
