import React from "react"; 

const BoxerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M4.82004 3H19.18C19.7167 3 19.9851 3 20.1838 3.0927C20.4487 3.21631 20.6461 3.451 20.7237 3.73439C20.7818 3.94693 20.7377 4.21349 20.6495 4.7466C20.584 5.14188 20.5513 5.33952 20.4642 5.49389C20.3481 5.69972 20.1632 5.8574 19.9425 5.93889C19.777 6 19.578 6 19.18 6H4.82003C4.42204 6 4.22304 6 4.05749 5.93889C3.83676 5.8574 3.65189 5.69972 3.53577 5.49389C3.44869 5.33952 3.41597 5.14188 3.35054 4.7466C3.2623 4.21349 3.21817 3.94693 3.27633 3.73439C3.35388 3.451 3.55133 3.21631 3.81621 3.0927C4.01487 3 4.28326 3 4.82004 3Z" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
    <path d="M4 6C2.80083 8.35175 2 10.0659 2 12.7001V17.7669C2 19.1536 2 19.847 2.43934 20.2778C3.35803 21.1786 8.51722 21.3009 9.56066 20.2778C10.6442 19.2153 9.60514 17.1627 10.1522 15.8675C10.488 15.0728 11.3875 14.4452 12 13.8446M12 13.8446L10.5 12.3737M12 13.8446C12.6125 14.4452 13.512 15.0728 13.8478 15.8675C14.3949 17.1627 13.3558 19.2153 14.4393 20.2778C15.358 21.1786 20.5172 21.3009 21.5607 20.2778C22 19.847 22 19.1536 22 17.7669V12.7001C22 10.0659 21.1992 8.35174 20 6" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
    <path d="M10 8.77778L12 6L15 11" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} strokeLinejoin={props.strokeLinejoin || "round"} />
  </svg>
);

export default BoxerIcon;