export const notFound = (req, res) => {
  return res.status(404).send({ message: 'Route not found!' });
};
