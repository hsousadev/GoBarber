import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  
  const authHeader = req.headers.authorization; 

  console.log(authHeader);

  // Check if token exist 
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provide '});
  }

  const [bearer, token] = authHeader.split(' ');

  // Verify Token to autorization 
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();

  } catch (err){
    return res.status(401).json({error: 'Token invalid'});
  }

}

