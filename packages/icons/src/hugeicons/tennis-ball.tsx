import React from "react"; 

const TennisBallIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M5 5C8.99009 8.52068 9.0099 15.4618 5 19" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M19 19C14.9901 15.4618 15.0099 8.52068 19 5" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
  </svg>
);

export default TennisBallIcon;