import { StatusCodes } from 'http-status-codes';
import User from '../model/user.js';
import { NotFoundError, BadRequestError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name && !email && !password) {
    throw new BadRequestError('Please provide all values');
  }

  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError('User already exist');
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    throw new BadRequestError('User does not exist');
  }

  const checkPass = await existingUser.comparePassword(password);
  if (!checkPass) {
    throw new BadRequestError('The password does not match, please try again!');
  }

  const token = existingUser.createJWT();

  res.status(StatusCodes.OK).json({
    user: {
      name: existingUser.name,
      email: existingUser.email,
    },
    token,
  });
};
const updateUser = async (req, res) => {
  res.send('This is update user route');
};
const deleteUser = async (req, res) => {
  res.send('This is delete user route');
};

export { register, login, updateUser, deleteUser };
