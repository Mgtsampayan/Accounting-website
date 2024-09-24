import { motion } from 'framer-motion';
import { ArrowUpRight, Users, UserCheck, CheckCircle, BarChart2 } from "lucide-react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import teamImage from '../images/bg_19.png';
import BackgroundVideo from '../images/bg_1.mp4';

const ProcessStep = ({ title, description, icon: Icon }) => (
    <motion.div
        className="pt-8 p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
    >
        <Icon className="text-custom-green w-12 h-12 mb-4" />
        <h3 className="font-extrabold text-2xl mb-3 text-black">{title}</h3>
        <p className="text-base text-black font-bold">{description}</p>
    </motion.div>
);

ProcessStep.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
};

const processSteps = [
    {
        title: "5. PERFORMANCE MANAGEMENT",
        description: "Hassle-free tracking of assigned tasks & accountabilities through ETC's close monitoring of your offshore team's deliverables",
        icon: BarChart2
    },
    {
        title: "4. TEAM MANAGEMENT",
        description: "ETC brings your offshore team together where they will feel valued to meet your firm's staffing goals & expectations",
        icon: Users
    },
    {
        title: "2. RECRUITMENT",
        description: "ETC will source out globally-skilled professional 'A' Player Accountants/Bookkeepers in the industry",
        icon: UserCheck
    },
    {
        title: "3. SELECTION & ONBOARDING PROCESS",
        description: "The choice is yours among the pool of shortlisted qualified candidates as we on-board them in a fully equipped high-tech office",
        icon: CheckCircle
    },
];

const BookAppointment = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/api/book-an-appointment');
    };

    return (
        <div className="relative min-h-screen pt-8">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={BackgroundVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-7xl mx-auto pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-black leading-tight pt-8">
                        ADVANCE YOUR FIRM&apos;S GROWTH WITH THE <span className="text-black">&quot;A&quot; PLAYER</span> IN OUTSOURCED ACCOUNTING SERVICES
                    </h1>
                    <p className="text-center mb-16 w-full max-w-5xl mx-auto text-black font-bold text-lg sm:text-xl pt-8">
                        Explore how our Acounting Outsourcing Services will work best for your firm&apos;s needs in getting the best talents to maximize the company&apos;s manpower growth potential
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="col-span-1 space-y-8 pt-8">
                            {processSteps.slice(0, 2).map((step, index) => (
                                <ProcessStep key={index} {...step} />
                            ))}
                        </div>

                        <div className="col-span-1 flex flex-col items-center justify-center">
                            <motion.div
                                className="text-center mb-8"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="font-extrabold text-2xl mb-4 text-black pt-8">1. BOOK AN APPOINTMENT</h3>
                                <p className="text-lg mb-6 text-black font-bold">Let&apos;s have a quick meet-up call to strategize how to tailor fit your best outsourcing solution</p>
                                <motion.button
                                    className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white flex items-center justify-center mx-auto text-xl font-semibold shadow-lg transition-all duration-300 mt-8"
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,128,0,0.5)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleGetStarted}
                                >
                                    GET STARTED <ArrowUpRight className="ml-2 h-6 w-6" />
                                </motion.button>
                            </motion.div>
                            <div className="w-full h-full sm:h-80"> 
                                <img
                                    src={teamImage}
                                    alt="Global Offshore Team"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="col-span-1 space-y-8 pt-8">
                            {processSteps.slice(2).map((step, index) => (
                                <ProcessStep key={index} {...step} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BookAppointment;