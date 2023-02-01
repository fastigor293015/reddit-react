import React from "react";
import { IIconProps } from "./IIconProps";

export function ArrowUpIcon({width = 19, height = 10}: IIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 0L0 10H19L9.5 0Z" fill="currentColor"/>
  </svg>
  )
}

