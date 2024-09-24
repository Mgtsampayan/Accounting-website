import PropTypes from 'prop-types';
import { memo } from 'react';
import Parañaque from '../images/bg_16.png';
import Laguna from '../images/bg_17.png';
import NorthAmerica from '../images/UnitedStates.png';
import BackgroundVideo from '../images/bg_1.mp4'; // Assuming you have a background video

const LocationCard = memo(({ title, text, imageSrc, imageAlt }) => (
	<div className="text-center">
		<h2 className="text-4xl font-bold text-green-800 mb-8">{title}
		<p className="text-xl text-green-700 mb-4">{text}</p>
		</h2>
		<div className="h-64 overflow-hidden">
			<img
				src={imageSrc}
				alt={imageAlt}
				className="w-full h-full object-cover object-center"
				loading="lazy"
			/>
		</div>
	</div>
));

LocationCard.displayName = 'LocationCard';

LocationCard.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
};

const locations = [
	{ 
		title: "PARAÑAQUE", 
		text: "Manila, Philippines",
		imageSrc: Parañaque, 
		imageAlt: "People in a meeting room in Parañaque",
	},
	{ 
		title: "LAGUNA",
		text: "Philippines",
		imageSrc: Laguna, 
		imageAlt: "Office cubicles in Laguna",
	},
	{ 
		title: "NORTH AMERICA", 
		text: "USA",
		imageSrc: NorthAmerica, 
		imageAlt: "Flag of the United States representing North America",
	},
];

const ExpandGlobal = () => (
	<div className="relative min-h-screen flex flex-col items-center justify-start p-4 gap-8">
		<video
			className="absolute inset-0 w-full h-full object-cover"
			src={BackgroundVideo}
			autoPlay
			loop
			muted
			playsInline
		/>
		<div className="relative z-10 w-full">
			<h1 className="text-5xl font-bold text-green-800 text-center mt-32 mb-24">
				EXPAND YOUR NEXT &quot;GLOBAL BRANCH OFFICE&quot;<br className="hidden md:inline" />
				TO GROW YOUR BUSINESS WITH ETC!
			</h1>
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{locations.map((location, index) => (
						<LocationCard key={index} {...location} />
					))}
				</div>
			</div>
		</div>
	</div>
);

export default memo(ExpandGlobal);