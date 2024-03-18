import React from "react"; 

const BoatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={'#ffffff'} fill={'none'} {...props}>
    <path d="M2 21.1932C2.68524 22.2443 3.57104 22.2443 4.27299 21.1932C6.52985 17.7408 8.67954 23.6764 10.273 21.2321C12.703 17.5694 14.4508 23.9218 16.273 21.1932C18.6492 17.5582 20.1295 23.5776 22 21.5842" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3.57228 17L2.07481 12.6457C1.80373 11.8574 2.30283 11 3.03273 11H20.8582C23.9522 11 19.9943 17 17.9966 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 11L15.201 7.50122C14.4419 6.55236 13.2926 6 12.0775 6H8C6.89543 6 6 6.89543 6 8V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6V3C10 2.44772 9.55228 2 9 2H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default BoatIcon;