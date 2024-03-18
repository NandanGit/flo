import React from "react"; 

const BananaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M14 11.9171C16 10.9087 18.478 11.7529 19.5777 14.1858C21.2282 17.8369 17.7619 21.8826 14.0077 21.9975C13.8997 22.0008 13.7859 21.9824 13.6861 21.9409C10.9391 20.7977 17.4719 16.7411 15.3319 14.5481" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
    <path d="M12.2591 13C12.753 11.1383 11.9705 9.25852 9.99515 9.72396C8.79898 10.0058 8.51642 10.8832 7.79305 10.9566C7.23113 11.0137 6.88441 10.372 7.03542 9.83562C8.1091 6.02216 15.5 6.03124 15.5 10.0073" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
    <path d="M14.0009 18.9084C11.807 19.9994 7.12675 20.6141 5.01867 19.0798C4.44082 18.6592 3.69853 18.7865 3.0238 18.7865C1.38828 18.7865 1.84992 15.5993 3.43752 16.2134C3.99904 16.4306 5.0201 16.7126 5.78158 16.281C10.6831 13.5034 15.9947 13.024 17.7464 5.71395C18.5261 2.46023 18.7506 2 20.0529 2C21.3553 2 22.9193 5.00117 21.3265 9.95847C20.9057 11.2678 20.4081 12.5772 19.6965 13.7991" stroke={props.stroke || "currentColor"} strokeWidth={props.strokeWidth || "1.2"} strokeLinecap={props.strokeLinecap || "round"} />
  </svg>
);

export default BananaIcon;