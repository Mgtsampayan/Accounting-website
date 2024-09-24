import Bg4 from '../images/bg_4.gif';
import PrimaryBg from '../images/bg_3.png';

function Component() {
    return (
        <div className="min-h-screen bg-white p-4 sm:p-8 flex flex-col items-center justify-start relative overflow-hidden font-sans text-black">
            {/* Primary background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center sm:bg-bottom"
                style={{ backgroundImage: `url(${PrimaryBg})` }}
            ></div>

            {/* Modified GIF background */}
            <div
                className="absolute inset-0 z-10 bg-no-repeat bg-bottom opacity-50"
                style={{
                    backgroundImage: `url(${Bg4})`,
                    backgroundSize: '1000px 300px', // Fixed size to prevent scaling
                }}
            ></div>

            {/* Content */}
            <div className="relative z-20 max-w-5xl w-full text-center space-y-6 sm:space-y-8 mt-16 sm:mt-24 px-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider mb-4 sm:mb-10">
                    BEST REASON/S
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-20">WHY CHOOSE US?</h1>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-x-20 gap-y-10 sm:gap-y-16 text-left">
                    <div className="space-y-2 sm:space-y-3 transition-transform transform hover:scale-105">
                        <h3 className="text-lg sm:text-xl font-semibold text-black">&quot;Customer is King&quot; Service Value</h3>
                        <p className="text-sm sm:text-base text-black">
                        This is how we impeccably treat our customers as we cater the needs and goals of each business. Gearing towards organizational growth and success through result driven solutions.        </p>             </div>

                    <div className="space-y-2 sm:space-y-3 transition-transform transform hover:scale-105">
                        <h3 className="text-lg sm:text-xl font-semibold text-black">Change Leadership</h3>
                        <p className="text-sm sm:text-base text-black">
                            We have our structured processes in place to see change as an opportunity for growth and improvement. ETC values shared vision with our customers through a consultative approach based on 10+ years of customer satisfaction and service excellence.                        </p>
                    </div>

                    <div className="space-y-2 sm:space-y-3 transition-transform transform hover:scale-105">
                        <h3 className="text-lg sm:text-xl font-semibold text-black">Seamless Connectivity</h3>
                        <p className="text-sm sm:text-base text-black">
                            ETC integrates the most advanced web technology into our workforce through cloud-based applications to collaborate with our global customers. We have a state of the art high security IT Infrastructure. </p>
                    </div>

                    <div className="space-y-2 sm:space-y-3 transition-transform transform hover:scale-105">
                        <h3 className="text-lg sm:text-xl font-semibold text-black">Diversity in Action</h3>
                        <p className="text-sm sm:text-base text-black">
                            ETC respects the uniqueness of each individual which make up our entire organization as a whole. This organic work culture empowers streamlined connections with our customers                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;