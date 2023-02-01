import React from "react";
import { IIconProps } from "./IIconProps";

export function MenuIcon({width = 5, height = 20}: IIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" fill="currentColor"/>
      <circle cx="2.5" cy="10" r="2.5" fill="currentColor"/>
      <circle cx="2.5" cy="17.5" r="2.5" fill="currentColor"/>
    </svg>
  )
}
