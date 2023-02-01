import React from 'react';
import classNames from 'classnames';
import styles from './text.css';

export enum EColors {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  grayF3 = 'grayF3',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  gray66 = 'gray66',
}

type TWeights = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children: React.ReactNode;
  size?: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  weight?: TWeights;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    color = EColors.black,
    weight,
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`weight-${weight}`]]: weight },
    // Благодаря такой конструкции классы для mobile, tablet и desktop создадутся только в том случае, если они действительно были переданы
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
  )

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
