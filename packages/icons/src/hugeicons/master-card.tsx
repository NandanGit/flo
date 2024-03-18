import React from "react"; 

const MasterCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M13.0002 12C13.0002 13.6569 11.6571 15 10.0002 15C8.34339 15 7.00025 13.6569 7.00025 12C7.00025 10.3431 8.34339 9 10.0002 9C11.6571 9 13.0002 10.3431 13.0002 12Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
    <path d="M12 9.76389C12.5308 9.28885 13.2316 9 14 9C15.6569 9 17 10.3431 17 12C17 13.6569 15.6569 15 14 15C13.2316 15 12.5308 14.7111 12 14.2361" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} />
  </svg>
);

export default MasterCardIcon;