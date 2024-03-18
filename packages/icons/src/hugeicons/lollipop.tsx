import React from "react"; 

const LollipopIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <circle cx="12" cy="8" r="6" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
    <path d="M12 14V22" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
    <path d="M6 7.96546C7 6.49988 9 5.66919 10.2857 6.12252C11.7609 6.64264 12.0271 8.38068 13.5 8.90686C15 9.44274 15.5 7.46966 18 7.93527" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
  </svg>
);

export default LollipopIcon;