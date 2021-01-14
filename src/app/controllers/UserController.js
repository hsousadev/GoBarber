// User Creation (Cadastro de usuários)

import User from '../models/User';


class UserController {

  // STORE function to register a new User
  async store(req, res) {
    const userExists = await User.findOne({ where: {email: req.body.email } });

    // Verify if has already the same user create (Verifica se o usuário já existe no banco de dados)
    if (userExists) {
      return res.status(400).json({ error: 'User already exists.'});
    }

    // Availble variables to return on frontend
    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
