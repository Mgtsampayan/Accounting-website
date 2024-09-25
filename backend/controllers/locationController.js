import pool from '../config/database.js';

export const getVisitorLocation = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM visitor_locations ORDER BY created_at DESC LIMIT 100');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching visitor locations:', error);
        res.status(500).json({ message: 'An error occurred while fetching visitor locations' });
    }
};