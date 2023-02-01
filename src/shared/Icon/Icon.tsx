import React from 'react';
import * as icons from '../icons';
import { IIconProps } from '../icons/IIconProps';
import styles from './icon.css';

export enum EIcons {
  anon = 'AnonIcon',
  arrowUp = 'ArrowUpIcon',
  block = 'BlockIcon',
  comments = 'CommentsIcon',
  expand = 'ExpandIcon',
  menu = 'MenuIcon',
  save = 'SaveIcon',
  share = 'ShareIcon',
  warning = 'WarningIcon',
}

interface IGenericIconProps extends IIconProps {
  name: EIcons;
}

export function Icon({name, width, height}: IGenericIconProps) {
  const RequiredIcon: ({}: IIconProps) => JSX.Element = icons[name];

  return (
    <RequiredIcon width={width} height={height} />
  )
}
