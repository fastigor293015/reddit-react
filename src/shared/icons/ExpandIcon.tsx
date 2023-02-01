import React from "react";
import { IIconProps } from "./IIconProps";

export function ExpandIcon({width = 20, height = 20}: IIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 2H10V1H14V5H13V2.70711L9.85355 5.85355L9.14645 5.14645L12.2929 2ZM5.85355 9.85355L2.70711 13H5V14H1V10H2V12.2929L5.14645 9.14645L5.85355 9.85355Z" fill="currentColor"/>
    </svg>
  )
}

