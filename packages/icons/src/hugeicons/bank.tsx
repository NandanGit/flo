import React from "react"; 

const BankIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M2 8.56907C2 7.37289 2.48238 6.63982 3.48063 6.08428L7.58987 3.79744C9.7431 2.59915 10.8197 2 12 2C13.1803 2 14.2569 2.59915 16.4101 3.79744L20.5194 6.08428C21.5176 6.63982 22 7.3729 22 8.56907C22 8.89343 22 9.05561 21.9646 9.18894C21.7785 9.88945 21.1437 10 20.5307 10H3.46928C2.85627 10 2.22152 9.88944 2.03542 9.18894C2 9.05561 2 8.89343 2 8.56907Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M11.9959 7H12.0049" stroke={props.stroke || "currentColor"} strokeWidth="2" strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M4 10V18.5M8 10V18.5" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M16 10V18.5M20 10V18.5" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M19 18.5H5C3.34315 18.5 2 19.8431 2 21.5C2 21.7761 2.22386 22 2.5 22H21.5C21.7761 22 22 21.7761 22 21.5C22 19.8431 20.6569 18.5 19 18.5Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
  </svg>
);

export default BankIcon;