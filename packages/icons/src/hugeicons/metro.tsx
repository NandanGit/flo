import React from "react"; 

const MetroIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={'#ffffff'} fill={'none'} {...props}>
    <path d="M6 19L4 21M18 19L20 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 15H9.00896M14.991 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 9C9 13 15.5 13 19 9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M5.27322 7.89427C6.09442 3.71577 7.23046 3 11.4545 3H12.5455C16.7695 3 17.9056 3.71577 18.7268 7.89427L19.2802 10.71C20.0349 14.5503 20.4123 16.4705 19.312 17.7352C18.2118 19 16.1412 19 12 19C7.85879 19 5.78819 19 4.68796 17.7352C3.58773 16.4705 3.9651 14.5503 4.71984 10.71L5.27322 7.89427Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export default MetroIcon;