import { Router } from 'express';

import photocontroller from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequered';

const router = new Router();

router.post('/', loginRequired, photocontroller.store);

export default router;
