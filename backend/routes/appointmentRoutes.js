import express from 'express';
import { body } from 'express-validator';
import { bookAppointment } from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/', [
    body('firstName').trim().isLength({ min: 2, max: 50 }).escape(),
    body('lastName').trim().isLength({ min: 2, max: 50 }).escape(),
    body('email').isEmail().normalizeEmail(),
    body('phoneNumber').isMobilePhone(),
    body('companyName').trim().isLength({ min: 2, max: 100 }).escape(),
    body('country').isObject(),
    body('message').optional().trim().isLength({ max: 500 }).escape(),
], bookAppointment);

export default router;