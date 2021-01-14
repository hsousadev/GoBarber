import {Router} from "express";

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionsController';


// variable to receive 'Router', every App Routes will call this variable
const routes = new Router();



// Create Users Route
routes.post('/users', UserController.store);
// Login Session
routes.post('/sessions', SessionController.store);




// Exporting (instance)
export default routes;

