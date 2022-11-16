module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    if (!req.user || req.user.email !== 'admin')
      throw new Error('You must be signed in to continue');

    next();
  } catch (err) {
    err.status = 401;
    next(err);
  }
};
