export const notFound = (req: any, res: any) => {
  res.status(404).json({
    success: false,
    error: "Page Not Found",
    message: "Requested URL is not found!",
  });
};
