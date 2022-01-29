import { StatusCodes } from 'http-status-codes';

const errorHandlers = (err, req, res, next) => {
  const defaultErrors = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: 'Something went wrong, please try again',
  };

  res.status(defaultErrors.statusCode).json({ msg });
};

export default errorHandlers;
