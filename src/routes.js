import {Router} from "express";

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionsController';

import authMiddleware from './app/middlewares/auth';

// variable to receive 'Router', every App Routes will call this variable
const routes = new Router();



// Create Users
routes.post('/users', UserController.store);
// Login Session
routes.post('/sessions', SessionController.store);

// Middleware only to already users
routes.use(authMiddleware);

// Updates Users
routes.put('/users', UserController.update);








// Exporting (instance)
export default routes;

