import { StatusCodes } from 'http-status-codes';

const errorHandlers = (err, req, res, next) => {
  const defaultErrors = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, please try again',
  };

  if (err.name === 'ValidationError') {
    defaultErrors.statusCode = StatusCodes.BAD_REQUEST;
    defaultErrors.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
  }
  res.status(defaultErrors.statusCode).json({ msg: defaultErrors.msg });
};

export default errorHandlers;
