import React from 'react';

const AnonymousIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
			d='M7 15C5.34315 15 4 16.3431 4 18C4 19.6569 5.34315 21 7 21C8.65685 21 10 19.6569 10 18C10 16.3431 8.65685 15 7 15Z'
			stroke={props.stroke || "currentColor"}
			strokeWidth={props.strokeWidth || "1.2"}
			strokeLinecap={props.strokeLinecap || "round"}
			strokeLinejoin={props.strokeLinejoin || "round"}
		/>
		<path
			d='M17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21C18.6569 21 20 19.6569 20 18C20 16.3431 18.6569 15 17 15Z'
			stroke={props.stroke || "currentColor"}
			strokeWidth={props.strokeWidth || "1.2"}
			strokeLinecap={props.strokeLinecap || "round"}
			strokeLinejoin={props.strokeLinejoin || "round"}
		/>
		<path
			d='M14 17H10'
			stroke={props.stroke || "currentColor"}
			strokeWidth={props.strokeWidth || "1.2"}
			strokeLinecap={props.strokeLinecap || "round"}
			strokeLinejoin={props.strokeLinejoin || "round"}
		/>
		<path
			d='M22 13C19.5434 11.7725 15.9734 11 12 11C8.02658 11 4.45659 11.7725 2 13'
			stroke={props.stroke || "currentColor"}
			strokeWidth={props.strokeWidth || "1.2"}
			strokeLinecap={props.strokeLinecap || "round"}
			strokeLinejoin={props.strokeLinejoin || "round"}
		/>
		<path
			d='M19 11.5L17.9425 4.71245C17.7268 3.3282 16.2232 2.57812 15.0093 3.24919L14.3943 3.58915C12.9019 4.41412 11.0981 4.41412 9.60574 3.58915L8.99074 3.24919C7.77676 2.57812 6.27318 3.3282 6.05751 4.71246L5 11.5'
			stroke={props.stroke || "currentColor"}
			strokeWidth={props.strokeWidth || "1.2"}
			strokeLinecap={props.strokeLinecap || "round"}
			strokeLinejoin={props.strokeLinejoin || "round"}
		/>
	</svg>
);

export default AnonymousIcon;
