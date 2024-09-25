import express from 'express';
import { getVisitorLocation } from '../controllers/locationController.js';

const router = express.Router();

router.get('/', getVisitorLocation);

export default router;