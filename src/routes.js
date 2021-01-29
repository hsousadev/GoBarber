import { Router } from "express";

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionsController';

import authMiddleware from './app/middlewares/auth';

// variable to receive 'Router', every App Routes will call this variable
const routes = new Router();

const upload = multer(multerConfig); 


// Login Session
routes.post('/sessions', SessionController.store);

// Create Users
routes.post('/users', UserController.store);

// Middleware only to already users
routes.use(authMiddleware);

// Updates Users
routes.put('/users', UserController.update);

// Upload files 
routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true});
});


// Exporting (instance)
export default routes;

