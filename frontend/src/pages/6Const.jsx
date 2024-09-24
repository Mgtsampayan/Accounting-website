import Image1 from '../images/bg_12.png';
import Image2 from '../images/bg_13.png';
import Video1 from '../images/bg_1.mp4';

function AcceleratedGrowthComponent() {
    return (
        <div className="relative min-h-screen p-6 sm:p-12 flex flex-col justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src={Video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto space-y-16 sm:space-y-24 px-4 sm:px-6">
                {/* Accelerated Growth Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-16">
                    <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-custom-green mb-6">ACCELERATED GROWTH</h2>
                        <p className="text-base sm:text-lg font-bold text-black mb-4">
                            Our dedicated team will allow you to focus on strategic planning in
                            growing and serving your customers which will save you time and
                            money of having to worry about your back-office needs.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <img
                            src={Image1}
                            alt="Growth Chart"
                            className="w-full max-w-[400px] h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Low Costs on Staffing Section */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-16">
                    <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-custom-green mb-6">LOW COSTS ON STAFFING</h2>
                        <p className="text-base sm:text-lg font-bold text-black mb-4">
                            Drives operational budget at its peak by outsourcing our global
                            dedicated Accountants, complementing your team&apos;s local
                            equivalents which will reduce staffing costs of up to 68% savings to
                            account more on your firm&apos;s profitability net worth to service more of
                            your customer&apos;s needs.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <img
                            src={Image2}
                            alt="68% Cost Savings"
                            className="w-full max-w-[400px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AcceleratedGrowthComponent;