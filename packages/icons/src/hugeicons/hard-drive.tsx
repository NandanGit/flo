import React from "react"; 

const HardDriveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M20.7104 8.70122L21.9186 12.7288C21.9578 12.8592 21.9773 12.9244 21.9879 12.9914L21.9908 13.0118C22 13.079 22 13.147 22 13.2831C22 16.7797 22 18.528 20.9812 19.6669C20.8824 19.7774 20.7774 19.8824 20.6669 19.9812C19.528 21 17.7797 21 14.2831 21H9.71685C6.22026 21 4.47197 21 3.33311 19.9812C3.22259 19.8824 3.11765 19.7774 3.01877 19.6669C2 18.528 2 16.7797 2 13.2831C2 13.147 2 13.079 2.00915 13.0118L2.01215 12.9914C2.02269 12.9244 2.04225 12.8592 2.08136 12.7288L3.28963 8.70122C4.11355 5.95484 4.5255 4.58166 5.5884 3.79083C6.6513 3 8.08495 3 10.9522 3H13.0478C15.9151 3 17.3487 3 18.4116 3.79083C19.4745 4.58166 19.8865 5.95484 20.7104 8.70122Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M2 13H22" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M17.9888 17H18M13 17H13.0112" stroke={props.stroke || "currentColor"} strokeWidth="2" strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
  </svg>
);

export default HardDriveIcon;