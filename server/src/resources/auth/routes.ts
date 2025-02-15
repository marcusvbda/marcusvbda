import express from 'express';
import controller from './controller';

const router = express.Router();

router.get('/check-email', controller.checkEmail);
router.post('/send-confirmation-code', controller.sendConfirmationCode);
router.post('/validate-code', controller.validateCode);
router.post('/store-user', controller.storeUser);
router.post('/receive-provider-user', controller.receiveProviderUser);
router.get(
	'/oauth-provider-redirect/:provider',
	controller.oauthProviderRedirect
);
router.get(
	'/oauth-provider-callback/:provider',
	controller.oauthProviderCallback
);

export default router;
