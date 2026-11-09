const errorHandling = (error, req, res, next) => {
  console.log("Error: ", error);

  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
};

module.exports = errorHandling;
