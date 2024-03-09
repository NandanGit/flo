import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface AppLinkProps extends LinkProps {
	disabled?: boolean;
}

const AppLink: React.FC<AppLinkProps> = ({
	style,
	children,
	disabled = false,
	...rest
}) => {
	if (disabled) {
		return <>{children}</>;
	}
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
