import { useRef, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Import videos
import Video1 from '../images/5.mp4';
import Video2 from '../images/bg_8.mp4';
import Video3 from '../images/1.mp4';

// Import background video and image
import BackgroundVideo from '../images/bg_1.mp4';
import BackgroundImage from '../images/bg_2.png';

function VideoPlayer({ videoUrl }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => console.error("Error playing video:", error));
        }
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src={videoUrl}
                loop
                muted
                playsInline
                autoPlay
            />
        </div>
    );
}

VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
};

function ServiceCard({ videoUrl, title, description }) {
    return (
        <motion.article
            className="flex flex-col bg-white shadow-lg overflow-hidden relative z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
        >
            <figure className="relative h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 z-30">
                <VideoPlayer
                    videoUrl={videoUrl}
                    aria-label={`Video for ${title}`}
                />
            </figure>
            <div className="p-4 sm:p-6 md:p-8 text-center">
                <motion.h3
                    className="text-balance text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-custom-green uppercase mb-2 sm:mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-black text-start text-sm sm:text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {description}
                </motion.p>
            </div>
        </motion.article>
    );
}

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
};

const services = [
    {
        id: 1,
        title: "BOOKKEEPING",
        description: "Thorough record of all business transactions done digitally with cloud-based backup of documents. Established internal control procedures set to maintain accuracy and efficiency of the bookkeeping process. Gear towards achieving powerful financial reporting which ensures books are closed on time for tax-filing so you have nothing to worry about.",
        videoUrl: Video1,
    },
    {
        id: 2,
        title: "ACCOUNTS PAYABLE (AP)",
        description: "Effective management done thru digitizing and utilizing AP automation software. This will streamline the AP workflow to establish timely payments of vendors by their due dates to avoid late fees. AP strategy in-placed to manage cash flow and optimize sufficient working capital for our Clients.",
        videoUrl: Video2,
    },
    {
        id: 3,
        title: "ACCOUNTS RECEIVABLE (AR)",
        description: "Use of our Client's electronic billing & online payments with clarity and consistency which drives the right KPIs to keep track of AR performance metrics: Days Sales Outstanding (DSO), Average Days Delinquent (ADD), Turnover Ratio & Collection Effectiveness Index (CEI). Systematized Credit & Collection Policies to take a proactive approach in addressing overdue accounts & make payments easy for customers.",
        videoUrl: Video3,
    },
];

function Background({ showVideo }) {
    const [mediaError, setMediaError] = useState(false);

    const handleMediaError = () => {
        console.error("Failed to load background media");
        setMediaError(true);
    };

    return (
        <div className="absolute inset-0 z-0">
            {showVideo ? (
                <video
                    className="w-full h-full object-cover"
                    src={BackgroundVideo}
                    poster={BackgroundImage}
                    loop
                    muted
                    playsInline
                    autoPlay
                    onError={handleMediaError}
                />
            ) : (
                <img
                    className="w-full h-full object-cover"
                    src={BackgroundImage}
                    alt="Background"
                    onError={handleMediaError}
                />
            )}
            {mediaError && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <p>Failed to load background media</p>
                </div>
            )}
        </div>
    );
}

Background.propTypes = {
    showVideo: PropTypes.bool.isRequired,
};

function AccountingServicesDisplay() {
    const memoizedServices = useMemo(() => services, []);
    const [showVideo, setShowVideo] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowVideo(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main className="relative min-h-screen overflow-hidden bg-custom-green">
            <Background showVideo={showVideo} />
            <div className="relative z-20 p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20">
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white"
                    style={{ textShadow: '4px 4px 4px rgba(5,5,5,5.5)' }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    PROFESSIONAL ACCOUNTING SERVICES
                </motion.h1>
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {memoizedServices.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </motion.div>
            </div>
        </main>
    );
}

export default AccountingServicesDisplay;