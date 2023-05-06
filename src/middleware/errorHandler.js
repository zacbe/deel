/* eslint-disable no-unused-vars */
module.exports = function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: err,
  });
};
