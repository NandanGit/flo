import React from "react"; 

const BaseballBatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M5.45946 20L20.5567 8.68934C22.3317 7.30882 22.495 4.68503 20.905 3.09501C19.315 1.50499 16.6912 1.66834 15.3107 3.4433L4 18.5405" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M5.57835 21.8426C7.08033 19.7713 4.24567 16.9109 2.15723 18.4251C1.96763 18.5625 1.94595 18.8368 2.11159 19.0023L5.00015 21.8884C5.16597 22.0541 5.44077 22.0323 5.57835 21.8426Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M10 17L7 14" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <circle cx="2.5" cy="2.5" r="2.5" transform="matrix(-1 0 0 1 21 16)" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinejoin={props.strokeLinejoin || "round"} />
  </svg>
);

export default BaseballBatIcon;