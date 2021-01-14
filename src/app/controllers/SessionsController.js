import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/auth';

// Git Teste

class SessionController {
  async store (req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }});

    // Check if the user exists
    if (!user) {
      return res.status(400).json({error: 'User not found'});
    }

    // Check that password is correct
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({error: 'Password does not match'});
    }

    const { id, name } = user;

    return res.json ({
      user: {
        id,
        name,
        email,
      },

      // token generate with JWT
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    })

  }
}

export default new SessionController();
