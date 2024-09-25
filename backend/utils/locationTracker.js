import geoip from 'geoip-lite';
import pool from '../config/database.js';

export const trackVisitor = async (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);

    if (geo) {
        const { country, region, city, ll } = geo;
        const [latitude, longitude] = ll;

        try {
            await pool.query(
                'INSERT INTO visitor_locations (ip_address, country, region, city, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)',
                [ip, country, region, city, latitude, longitude]
            );
        } catch (error) {
            console.error('Error tracking visitor location:', error);
        }
    }

    next();
};