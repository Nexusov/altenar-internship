import React from 'react';
import { StyledSvg } from "styles/StyledComponents/DropDown";

const ActionIcon = ({ active }) => {
  return (
    <StyledSvg 
      active={active} 
      width="48" 
      height="48" 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#2196F3" />
      <g clip-path="url(#clip0_24_8197)">
        <path
          d="M24 20C25.1 20 26 19.1 26 18C26 16.9 25.1 16 24 16C22.9 16 22 16.9 22 18C22 19.1 22.9 20 24 20ZM24 22C22.9 22 22 22.9 22 24C22 25.1 22.9 26 24 26C25.1 26 26 25.1 26 24C26 22.9 25.1 22 24 22ZM24 28C22.9 28 22 28.9 22 30C22 31.1 22.9 32 24 32C25.1 32 26 31.1 26 30C26 28.9 25.1 28 24 28Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_24_8197">
          <rect width="24" height="24" fill="white" transform="translate(12 12)" />
        </clipPath>
      </defs>
    </StyledSvg>
  )
}

export default ActionIcon;
