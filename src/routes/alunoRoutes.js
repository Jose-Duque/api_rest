import { Router } from 'express';
import alunocontroller from '../controllers/AlunoController';

import loginRequered from '../middlewares/loginRequered';

const router = new Router();

router.get('/', alunocontroller.index);
router.post('/', loginRequered, alunocontroller.store);
router.put('/:id', loginRequered, alunocontroller.update);
router.get('/:id', alunocontroller.show);
router.delete('/:id', loginRequered, alunocontroller.delete);

export default router;
