export const validation = (validator) => {
  return async (req, res, next) => {
    const isValid = await validator(req.body);
    if (isValid) {
      next();
    } else {
        res.status(400).json({ message: "Bad Request" });
    }
  };
};
