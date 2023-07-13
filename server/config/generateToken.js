// const jwt = require("jsonwebtoken");
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, 'piyush', {
    expiresIn: "30d",
  });
};

// module.exports = generateToken;
export default generateToken;
