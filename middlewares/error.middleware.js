const errorHandling = (error, req, res, next) => {
  console.log("Error: ", error);

  res.status(500).json({
    message: "Unable to process data!",
  });
};

module.exports = errorHandling;
