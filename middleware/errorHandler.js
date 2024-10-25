export const errorHandler = (req, res, next, error) => {
  return res.status(error.statusCode ?? 500).send({ message: error.message });
};
