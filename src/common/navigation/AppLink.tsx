import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface AppLinkProps extends LinkProps {}

const AppLink: React.FC<AppLinkProps> = ({ style, children, ...rest }) => {
	return (
		<Link
			style={{
				textDecoration: 'none',
				color: 'inherit',
				...style,
			}}
			{...rest}
		>
			{children}
		</Link>
	);
};

export default AppLink;
