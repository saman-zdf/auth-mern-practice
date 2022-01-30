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

  res.status(StatusCodes.CREATED).json({
    user: user,
  });
};

const login = async (req, res) => {
  res.send('This is login route');
};
const updateUser = async (req, res) => {
  res.send('This is update user route');
};
const deleteUser = async (req, res) => {
  res.send('This is delete user route');
};

export { register, login, updateUser, deleteUser };
