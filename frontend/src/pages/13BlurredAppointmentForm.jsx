import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../images/bg_6.mp4';

const BlurredAppointmentForm = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/api/book-an-appointment');
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={BackgroundVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            <motion.div
                className="w-full max-w-4xl p-8 relative z-10 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center">
                    <motion.button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300"
                        onClick={handleClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        BOOK AN APPOINTMENT
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default BlurredAppointmentForm;