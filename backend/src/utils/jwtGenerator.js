import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export const generateToken = (user) => {
  const data = {
    _id: user._id,
    email: user.email,
  };
  const signature = JWT_SECRET;
  const expiration = "6h";

  return jwt.sign({ data }, signature, { expiresIn: expiration });
};
