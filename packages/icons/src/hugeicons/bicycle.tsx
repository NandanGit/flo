import React from "react"; 

const BicycleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M6 19.9984C8.20914 19.9984 10 18.2109 10 16.006C10 13.8011 8.20914 12.0137 6 12.0137C3.79086 12.0137 2 13.8011 2 16.006C2 18.2109 3.79086 19.9984 6 19.9984Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M18 19.9984C20.2091 19.9984 22 18.2109 22 16.006C22 13.8011 20.2091 12.0137 18 12.0137C15.7909 12.0137 14 13.8011 14 16.006C14 18.2109 15.7909 19.9984 18 19.9984Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M6 16.0059H10.3706C10.7302 16.0059 11.0622 15.8132 11.2399 15.5011L15.5 8.02124" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M12 13.0117L7 7.02319M7 7.02319H5M7 7.02319H9" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M18.0531 15.9707L14.8057 4.03072C16.2565 3.96012 19.3585 3.8306 19.9908 6.20978" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
  </svg>
);

export default BicycleIcon;