import React from 'react';

const IceCream03Icon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox="0 0 24 24"
		width={24}
		height={24}
		color={'#000000'}
		fill={'none'}
		{...props}
	>
		<path
			d='M12 2C9.00353 2 6.31715 4.74891 7.15597 7.78336C7.38917 8.627 6 8.96316 6 9.873C6 12.5824 10.5 9.83716 10.5 12.7868C10.5 14.4044 13 14.4044 13 12.7868C13 9.62712 18 12.8244 18 9.873C18 8.96316 16.6108 8.627 16.844 7.78336C17.6828 4.74891 14.9965 2 12 2Z'
			stroke={props.stroke || "currentColor"}
			strokeWidth={props.strokeWidth || "1.2"}
			strokeLinejoin={props.strokeLinejoin || "round"}
		/>
		<path
			d='M7.5 11L8.32693 13.9652C9.82073 19.3217 10.5676 22 12 22C13.4324 22 14.1793 19.3217 15.6731 13.9652L16.5 11'
			stroke={props.stroke || "currentColor"}
			strokeWidth={props.strokeWidth || "1.2"}
			strokeLinejoin={props.strokeLinejoin || "round"}
		/>
	</svg>
);

export default IceCream03Icon;
