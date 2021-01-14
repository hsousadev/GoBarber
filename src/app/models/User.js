// User Model (Modelo de usuário: O que um usuário terá como informações)

import Sequelize, { Model } from 'sequelize';

// bcrypt to hash password
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // Visble just for the code only.
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

      // Sequelize FUNCTION to Hash password before save
      this.addHook('beforeSave', async user => {

        // If user already put the password, then make HASH in level 8
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8);
          }

      });

      return this;

  }

  // Compare password with password_hash
  checkPassword(password){
    return bcrypt.compare(password, this.password_hash);
  }

}

// Class instance
export default User;
