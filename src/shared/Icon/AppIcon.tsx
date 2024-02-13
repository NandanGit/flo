import { AppIconOptions } from './AppIconOptions';
import { AppIcons } from './AppIcons';

// PLEASE COMMENT THE UNUSED RESOLVER TO AVOID BLOATING THE BUNDLE
import resolveRoundedMuiIcon from './resolveRoundedAppIcon';
// import resolveTwoToneMuiIcon from './resolveTwoToneAppIcon';

const resolveMuiIcon = resolveRoundedMuiIcon;
// const resolveMuiIcon = resolveTwoToneMuiIcon;

const defaultOptions: AppIconOptions = {
	fontSize: 'large',
	color: 'inherit',
};

export const AppIcon = (icon: AppIcons, options: AppIconOptions = {}) => {
	const MuiIcon = resolveMuiIcon(icon);
	return <MuiIcon {...defaultOptions} {...options} />;
};
