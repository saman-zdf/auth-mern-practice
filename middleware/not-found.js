import { StatusCodes } from 'http-status-codes';
const notFound = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: 'Route is not found!' });
};

export default notFound;
