import React from 'react';

export interface SectionDividerProps
	extends React.HTMLAttributes<HTMLHRElement> {}

const SectionDivider: React.FC<SectionDividerProps> = ({ style, ...props }) => {
	return (
		<hr
			style={{
				height: '100%',
				border: '0.5px solid #fff2',
				margin: '0 1.5rem',
				...style,
			}}
			{...props}
		/>
	);
};

export default SectionDivider;
