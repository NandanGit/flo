import React from "react"; 

const Baby02Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <circle cx="12" cy="8" r="6" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M16.874 12C17.5826 13.037 18 14.3093 18 15.6842C18 16.5017 17.8524 17.2829 17.5838 18M7.12605 12C6.41738 13.037 6 14.3093 6 15.6842C6 19.1723 8.68629 22 12 22C14.5371 22 16.7064 20.3424 17.5838 18M17.5838 18C14.8509 16.8 12.0559 14.8333 11 14" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
    <path d="M12.0002 2C11.0061 2 10.2002 2.7835 10.2002 3.75C10.2002 4.7165 11.0061 5.5 12.0002 5.5C12.4612 5.5 12.8817 5.3315 13.2002 5.0544" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
    <path d="M10 8H10.0081M14 8H14.0081" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
  </svg>
);

export default Baby02Icon;