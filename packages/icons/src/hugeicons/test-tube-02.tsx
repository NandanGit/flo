import React from "react"; 

const TestTube02Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M16 2V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V2" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M8 8.55626C8.88889 7.40291 10.3106 8.23432 12 9.31817C14.2222 10.7439 15.5556 9.65003 16 8.6152" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
    <path d="M7 2H17" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M11 18.002L11.0087 17.9996" stroke={props.stroke || "currentColor"} strokeWidth="2" strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M13 14.002L13.0087 13.9996" stroke={props.stroke || "currentColor"} strokeWidth="2" strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
  </svg>
);

export default TestTube02Icon;