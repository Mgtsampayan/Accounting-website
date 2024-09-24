import Image1 from '../images/bg_2.png'
import Logo from '../images/teleconnect.png'
import CallCenterVideo from '../images/bg_14.mp4'

function AboutUs() {
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundImage: `url(${Image1})` }}>
            <div className="max-w-8xl w-full space-y-8 sm:space-y-12 md:space-y-16">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                    <div className="w-full lg:w-1/2 xl:w-3/5 space-y-6 sm:space-y-8 md:space-y-10">
                        <h1 className="text-center lg:text-end text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider p-4 sm:p-6 italic"
                            style={{ textShadow: '4px 4px 4px rgba(5,5,5,5.5)' }}
                        >
                            About Us
                        </h1>
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                            <video src={CallCenterVideo} className="w-full h-full object-cover" autoPlay muted loop playsInline>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-2/5 flex flex-col items-center">
                        <img
                            src={Logo}
                            alt="TELECONNECT PARANAQUE LOS BAÑOS"
                            className="max-h-full w-full h-28 sm:h-32 md:h-40 lg:h-48 xl:h-56 object-contain"
                        />
                        <div className="p-4 sm:p-6 md:p-8">
                            <p className="text-black text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 lg:text-black">
                                ETC now offers a wide variety of Accounting Services which includes Bookkeeping, Accounts Payable (A/P) & Accounts Receivable (A/R) Processing, Payroll Services, Billing & Collections, and Audit Services, etc.
                            </p>
                            <p className="text-black text-base sm:text-lg lg:text-xl xl:text-2xl lg:text-black">
                                ETC&apos;s Competitive Edge to name a few are: Our Solid Management Team; Our Modern and Fully-equipped Facilities alongside with the most advanced Accounting Software Applications; Our Cost-Saving prices with the quality of service which could save up to 68% in Operational expenditures for most companies worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs