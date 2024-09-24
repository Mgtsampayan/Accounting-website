import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import AccountingProfileImage from '../images/AccountingProfile.png';
import BackgroundVideo from '../images/bg_1.mp4';

function AccountantProfile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } }
    }), []);

    const itemVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }), []);

    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
            >
                <source src={BackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <motion.div
                className="relative z-10 p-4 sm:p-6 lg:p-8 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <motion.div className="lg:w-1/3 xl:w-1/4 space-y-8 flex-shrink-0" variants={itemVariants}>
                            <div className="rounded-3xl overflow-hidden border-4 border-custom-green max-w-sm mx-auto lg:max-w-full transition-all duration-300 ease-in-out hover:shadow-xl shadow-lg">
                                <motion.img
                                    src={AccountingProfileImage}
                                    alt="Profile picture"
                                    width="300"
                                    height="400"
                                    className="object-cover w-full h-auto"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                className="text-custom-green p-6 rounded-xl max-w-sm mx-auto lg:max-w-full shadow-xl"
                                // whileHover={{ backgroundColor: "#166534" }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="sm:text-xl text-center font-medium mb-3"><b>Finance Controller <br/> - US Campaign</b></h2>
                                <p className="text-base text-center sm:text-xl font-extrabold">E-TeleConnect, Inc.</p>
                            </motion.div>
                            </div>
                            {/* <motion.div
                                className="text-custom-green p-6 rounded-xl max-w-sm mx-auto lg:max-w-full shadow-xl"
                                // whileHover={{ backgroundColor: "#166534" }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-sm sm:text-xl text-center font-extrabold mb-3">Finance Controller - US Campaign</h2>
                                <p className="text-base text-center sm:text-xl font-extrabold">E-TeleConnect, Inc.</p>
                            </motion.div> */}
                        </motion.div>

                        <div className="lg:w-2/3 xl:w-3/4 flex flex-col justify-evenly">
                            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
                                <motion.div className="quote-container space-y-4 mb-20" variants={itemVariants}>
                                    <blockquote className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isMobile ? 'text-center' : 'text-end'} text-custom-green italic`}>
                                        &ldquo;THE BEST ACCOUNTANTS DON&apos;T JUST SEE NUMBERS; THEY SEE THE POTENTIAL FOR FINANCIAL TRANSFORMATION.&rdquo;
                                    </blockquote>
                                    <div className={`${isMobile ? 'text-center' : 'text-end'}`}>
                                        <blockquote className="font-bold text-custom-green text-lg sm:text-xl inline-block">
                                            - Samantha Wilson
                                        </blockquote>
                                    </div>
                                </motion.div>
                                {/* <motion.p 
                                        className="font-bold text-custom-green text-lg sm:text-xl inline-block justify-center align-end"
                                        whileHover={{ color: "#34D399" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        - Samantha Wilson
                                </motion.p> */}

                                <motion.div className={`author-container ${isMobile ? 'text-center' : 'text-right'}`} variants={itemVariants}>
                                    {/* <motion.p 
                                        className="font-bold text-custom-green text-lg sm:text-xl inline-block"
                                        whileHover={{ color: "#34D399" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        - Samantha Wilson
                                    </motion.p> */}
                                </motion.div>

                                <motion.div className="heading-container" variants={itemVariants}>
                                    <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isMobile ? 'text-center' : 'text-end'} text-custom-green italic`}>
                                        ACCOUNTANT AND BOOKKEEPING BPO FIRM SERVING GREATER ARIZONA AND CALIFORNIA AREA
                                    </h1>
                                </motion.div>
                            </div>

                            <motion.div className="description-container" variants={itemVariants}> {/*mt-6 sm:mt-8 md:mt-10 lg:mt-12*/}
                                <p className="text-custom-green font-semibold text-start lg:text-start lg:text-2xl text-lg sm:text-lg leading-relaxed">
                                    There are a lot of Accounting firms globally but not all can provide the variety of services your company needs to keep careful track of your finances. At ETC, you&apos;ll work with a Team of Accountants who have deep knowledge of all aspects of Accounting and can provide the reliable, accurate, and timely services you can rely on. We offer a wide range of CPA Services for individuals and businesses in a more personal and interactive approach.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AccountantProfile;