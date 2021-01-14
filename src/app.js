// import server express
import express from 'express';

// import  routes
import routes from './routes';

// import database
import './database'

class App {

  constructor(){

    this.server = express()

    // middlewares (extra functions)
    this.middlewares();
    this.routes();

  }

  // Middlewares
  middlewares(){

    // Allow the server to use requires in JSON
    this.server.use(express.json());
  }

  routes(){

    // Allow the server to use routes
    this.server.use(routes)
  }

}

// Exporting App (instance)
export default new App().server;



