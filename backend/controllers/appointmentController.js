import { validationResult } from 'express-validator';
import { createAppointment } from '../models/appointment.js';

export const bookAppointment = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const appointmentId = await createAppointment(req.body);
        res.status(201).json({ message: 'Appointment booked successfully', appointmentId });
    } catch (error) {
        console.error('Error booking appointment:', error);
        res.status(500).json({ message: 'An error occurred while booking the appointment' });
    }
};