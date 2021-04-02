import {Router} from 'express';
import {UserController} from "./controllers/UserController";
import {SurveysController} from "./controllers/SurveysController";
import { SendEmailController } from './controllers/SendMailController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendEmailController();

router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/show", surveysController.show);

router.post("/sendMail", sendMailController.execute);

export {router};