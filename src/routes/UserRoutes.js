import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequered';

const router = new Router();

// Em uma aplicação real esse não existiria
router.get('/', userController.index); // Lista de usuários
router.get('/:id', userController.show); // Lista de usuário

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
