import { Router } from 'express';
import { login } from '../Controllers/authController';
const router: Router = Router();

router.post('/login', login);

export default router;
