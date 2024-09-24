import pool from '../config/database.js';

export const createAppointment = async (appointmentData) => {
    try {
        console.log('Inserting appointment data:', appointmentData);
        const [result] = await pool.query(
            'INSERT INTO appointments (first_name, last_name, email, phone_number, company_name, country, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [appointmentData.firstName, appointmentData.lastName, appointmentData.email, appointmentData.phoneNumber, appointmentData.companyName, appointmentData.country.value, appointmentData.message]
        );
        console.log('Insert result:', result);
        return result.insertId;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};