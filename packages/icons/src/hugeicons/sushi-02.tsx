import React from "react"; 

const Sushi02Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M13 9C13 10.1046 13.8954 11 15 11C16.1046 11 17 10.1046 17 9C17 7.89543 16.1046 7 15 7C13.8954 7 13 7.89543 13 9Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M10 9C10 11.7614 12.2386 14 15 14C17.7614 14 20 11.7614 20 9C20 6.23858 17.7614 4 15 4C12.2386 4 10 6.23858 10 9Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M11.5 2L7.53669 16.412M6 22L6.825 19" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M22 12.5L2 18" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
  </svg>
);

export default Sushi02Icon;