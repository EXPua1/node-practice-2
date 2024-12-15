export const notFoundHandler = (req, res) => {
  console.log('Error');
  res.status(404).json({
    status: 404,
    message: 'Route not found',
  });
};
