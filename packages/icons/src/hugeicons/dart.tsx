import React from "react"; 

const DartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M19.5 4.5L22 2" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M2.06697 19.4071C1.99688 18.9866 1.96184 18.7763 2.06329 18.6134C2.16473 18.4506 2.3689 18.3893 2.77723 18.2668L7 17L5.73317 21.2228C5.61067 21.6311 5.54942 21.8353 5.38656 21.9367C5.2237 22.0382 5.01345 22.0031 4.59294 21.933L3.14369 21.6915C2.79801 21.6339 2.62517 21.6051 2.51005 21.49C2.39493 21.3748 2.36612 21.202 2.30851 20.8563L2.06697 19.4071Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M15 6L18 9" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M8.82023 15.9304L18.6643 9.44706C20.2341 8.41317 20.4597 6.19872 19.1306 4.86948C17.8015 3.54024 15.5873 3.76583 14.5535 5.33581L8.07079 15.1809C7.79101 15.6058 8.40284 16.2053 8.82023 15.9304Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M7 17L8 16" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
  </svg>
);

export default DartIcon;