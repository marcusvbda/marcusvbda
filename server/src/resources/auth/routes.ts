import express from 'express';
import controller from './controller';

const router = express.Router();

router.get('/check-email', controller.checkEmail);
router.post('/send-confirmation-code', controller.sendConfirmationCode);
router.post('/validate-code', controller.validateCode);

export default router;
