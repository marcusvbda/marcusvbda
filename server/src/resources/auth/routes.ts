import express from 'express';
import controller from './controller';

const router = express.Router();

router.get('/check-email', controller.checkEmail);

export default router;
