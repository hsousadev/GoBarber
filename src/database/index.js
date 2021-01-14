
// Sequelize Connection with database (config/database.js)

import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

// Availble tables
const models = [User];

class Database {
  constructor(){

    this.init();

  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map (model => model.init(this.connection));
  }

}

export default new Database();
