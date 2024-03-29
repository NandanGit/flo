/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable prefer-const */
import React from 'react';
import { AppPage } from '../../../shared/pages/AppPage';
import { FloConstants } from '@flo.app/constants';
import { Card, List, ListItemButton, Typography } from '@mui/material';
import {
	BankIcon,
	BeachIcon,
	BowlingPinsIcon,
	Bus01Icon,
	CarrotIcon,
	Cash01Icon,
	ChickenThighsIcon,
	Coupon01Icon,
	CreditCardIcon,
	DrinkIcon,
	EggsIcon,
	EnergyIcon,
	FishFoodIcon,
	FuelStationIcon,
	GiftIcon,
	HairDryerIcon,
	Hamburger01Icon,
	HandSanitizerIcon,
	Home06Icon,
	House04Icon,
	InjectionIcon,
	KettleIcon,
	LabsIcon,
	Lamp03Icon,
	LibraryIcon,
	MasterCardIcon,
	MetroIcon,
	Money02Icon,
	Motorbike02Icon,
	NoteIcon,
	PerfumeIcon,
	PiggyBankIcon,
	Pizza01Icon,
	PuzzleIcon,
	SchoolIcon,
	ServiceIcon,
	ShampooIcon,
	Shirt01Icon,
	SmartPhone01Icon,
	Sofa01Icon,
	SoftDrink01Icon,
	SpeakerIcon,
	StarIcon,
	Store04Icon,
	SwimmingIcon,
	Tag01Icon,
	TaxiIcon,
	Ticket03Icon,
	TractorIcon,
	UniversityIcon,
	VolleyballIcon,
	Wallet01Icon,
	WaterPumpIcon,
	WellnessIcon,
	Yoga01Icon,
} from '@flo.app/icons';
import { RGBA } from '../../../utils/color/RGBA';

const HomePage: React.FC = () => {
	// Your homepage logic here
	// const colorMap = sortColorsByHex(FloConstants.schema.shared.COLOR_MAP);
	const colorMap = FloConstants.schema.shared.COLOR_MAP;

	return (
		<AppPage>
			{/* <CreditCardIcon color='cream' /> */}
			<List
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
					gap: '1rem',
				}}
			>
				{Object.keys(colorMap).map((colorName) => {
					// const color = hexToRgb(colorMap[colorName as keyof typeof colorMap])!;
					const color = new RGBA(colorMap[colorName as keyof typeof colorMap]);
					const iconProps = {
						width: '32px',
						height: '32px',
						style: {
							color: colorMap[colorName as keyof typeof colorMap],
						},
					};
					const icons = [
						<CreditCardIcon {...iconProps} />,
						<BankIcon {...iconProps} />,
						<BeachIcon {...iconProps} />,
						<BowlingPinsIcon {...iconProps} />,
						<Bus01Icon {...iconProps} />,
						<CarrotIcon {...iconProps} />,
						<Cash01Icon {...iconProps} />,
						<EnergyIcon {...iconProps} />,
						<ChickenThighsIcon {...iconProps} />,
						<Coupon01Icon {...iconProps} />,
						<DrinkIcon {...iconProps} />,
						<EggsIcon {...iconProps} />,
						<FishFoodIcon {...iconProps} />,
						<FuelStationIcon {...iconProps} />,
						<GiftIcon {...iconProps} />,
						<HairDryerIcon {...iconProps} />,
						<Hamburger01Icon {...iconProps} />,
						<HandSanitizerIcon {...iconProps} />,
						<Home06Icon {...iconProps} />,
						<House04Icon {...iconProps} />,
						<InjectionIcon {...iconProps} />,
						<LabsIcon {...iconProps} />,
						<KettleIcon {...iconProps} />,
						<Lamp03Icon {...iconProps} />,
						<LibraryIcon {...iconProps} />,
						<MasterCardIcon {...iconProps} />,
						<MetroIcon {...iconProps} />,
						<Money02Icon {...iconProps} />,
						<Motorbike02Icon {...iconProps} />,
						<NoteIcon {...iconProps} />,
						<PerfumeIcon {...iconProps} />,
						<PiggyBankIcon {...iconProps} />,
						<Pizza01Icon {...iconProps} />,
						<PuzzleIcon {...iconProps} />,
						<SchoolIcon {...iconProps} />,
						<ServiceIcon {...iconProps} />,
						<ShampooIcon {...iconProps} />,
						<Shirt01Icon {...iconProps} />,
						<SmartPhone01Icon {...iconProps} />,
						<Sofa01Icon {...iconProps} />,
						<SoftDrink01Icon {...iconProps} />,
						<SpeakerIcon {...iconProps} />,
						<StarIcon {...iconProps} />,
						<Store04Icon {...iconProps} />,
						<SwimmingIcon {...iconProps} />,
						<Tag01Icon {...iconProps} />,
						<TaxiIcon {...iconProps} />,
						<Ticket03Icon {...iconProps} />,
						<TractorIcon {...iconProps} />,
						<UniversityIcon {...iconProps} />,
						<Wallet01Icon {...iconProps} />,
						<VolleyballIcon {...iconProps} />,
						<WaterPumpIcon {...iconProps} />,
						<WellnessIcon {...iconProps} />,
						<Yoga01Icon {...iconProps} />,
					];
					return (
						<Card
							variant='outlined'
							key={colorName}
							style={{
								// backgroundColor: colorMap[colorName as keyof typeof colorMap],
								padding: 0,
								overflow: 'visible',
								backgroundColor: color.withOpacity(0.1),
							}}
						>
							<ListItemButton
								style={{
									// border: '1px solid teal',
									minHeight: '2.5rem',
									// width: '5rem',

									// display: 'flex',
									// justifyContent: 'start',
									// // alignItems: 'end',
									// alignItems: 'center',
									display: 'grid',
									gridTemplateColumns: 'repeat(5, 1fr)',
									gridTemplateRows: 'repeat(3, 1fr)',

									padding: '0.5rem',
									margin: 0,
									gap: '0.75rem',
								}}
							>
								{getRandomElements(icons, 15)}
								<Card
									// variant='outlined'
									style={{
										position: 'absolute',
										bottom: 0,
										left: '50%',
										transform: 'translate(-50%, 50%)',

										//
										borderRadius: '5rem',
										// borderRadius: '0.25rem',
										padding: '0.15rem 0.3rem 0.1rem',
										// width: '5rem',
										width: 'fit-content',
										backgroundColor: color.withOpacity(0.1),
									}}
								>
									<Typography
										variant='body1'
										component='div'
										style={{
											// Title case
											textTransform: 'capitalize',
											fontSize: '0.5rem',
											// marginBottom: '0.15rem',
											// color: '#aaa',
											color: color.withOpacity(0.9),
											// marginLeft: '0.75rem',
										}}
									>
										{colorName.split('_').join(' ').toLowerCase()}
										{
											// `R: ${color.r}, G: ${color.g}, B: ${color.b}`
										}
									</Typography>
								</Card>
							</ListItemButton>
						</Card>
					);
					// <div
					// 	key={colorName}
					// 	style={{
					// 		// border: '1px solid teal',
					// 		padding: '1rem',
					// 		boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
					// 		// textAlign: 'center',
					// 		borderRadius: '0.2rem',
					// 		backgroundColor: colorMap[colorName as keyof typeof colorMap],
					// 	}}
					// >
					// 	{/* {colorName} */}
					// 	{/* {ind} */}
					// </div>
				})}
			</List>
		</AppPage>
	);
};

export default HomePage;

function getRandomElements<T>(arr: T[], n: number) {
	const shuffled = arr.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, n);
}

//
sortColorsByHex;
function sortColorsByHex(colors: { [key: string]: string }) {
	const keys = Object.keys(colors);

	keys.sort((a, b) => {
		const { r: aR, g: aG, b: aB } = hexToRgb(colors[a])!;
		const { r: bR, g: bG, b: bB } = hexToRgb(colors[b])!;
		const { h: aH, s: aS, l: aL } = rgbToHsl(aR, aG, aB)!;
		const { h: bH, s: bS, l: bL } = rgbToHsl(bR, bG, bB)!;

		// Sort based on Red then Green then Blue
		// return aR - bR || aG - bG || aB - bB;
		// Sort based on hue then saturation then lightness
		return aH - bH || aS - bS || aL - bL;

		// Sort based on hue
		// return aH - bH;
		// Sort based on saturation
		// return aS - bS;
		// Sort based on lightness
		// return aL - bL;
		// Sort based on apparent brightness
		// return (
		// 	aS - bS ||
		// 	0.299 * aR +
		// 		0.587 * aG +
		// 		0.114 * aB -
		// 		(0.299 * bR + 0.587 * bG + 0.114 * bB)
		// );

		// return aR - bR || aG - bG || aB - bB;
		// return aS - bS || aG - bG || aB - bB || aR - bR;
		// return aG - bG || aS - bS || aB - bB || aR - bR;
		// return aL - bL;
		// return ((rgbA.r + rgbA.g + rgbA.b)/3) - ((rgbB.r + rgbB.g + rgbB.b)/3)
	});

	const sortedColors: { [key: string]: string } = {};
	keys.forEach((key) => {
		sortedColors[key] = colors[key];
	});

	return sortedColors;
}

function hexToRgb(hex: string) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
}

function rgbToHsl(
	r: number,
	g: number,
	b: number
): { h: number; s: number; l: number } {
	r /= 255;
	g /= 255;
	b /= 255;

	let max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	let h: number = 1,
		s: number,
		l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	} else {
		let d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return {
		h: h * 360,
		s: s * 100,
		l: l * 100,
	}; // return HSL values as [Hue in degree, Saturation in %, Lightness in %]
}
rgbToHsl;
