import express from 'express';

const router = express.Router();
import {
  register,
  login,
  updateUser,
  deleteUser,
} from '../controller/authController.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/:id').patch(updateUser);
router.route('/:id').delete(deleteUser);

export default router;
