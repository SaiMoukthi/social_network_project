
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || 'changeme';
module.exports = function(req, res, next){
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  if(!token) return res.status(401).json({ message: 'No token' });
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
