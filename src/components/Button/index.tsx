'use client';

import React, { ReactNode, forwardRef } from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

import ElementType from '../ElementType';
import Flex from '../Flex';
import Icon from '../Icon';
import { IconName } from '../../resources/icon';

interface ICommonProps {
  variant?: 'secondary';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between';
  radius?:
    | 'none'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left';
  size?: 's' | 'm' | 'l';
  label?: string;
  prefixIcon?: IconName;
  style?: React.CSSProperties;
  className?: string;
  fillWidth?: boolean;
  children?: ReactNode;
  href?: string;
  weight?: 'default' | 'strong';
}

export type ButtonProps = ICommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AnchorProps = ICommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps | AnchorProps>(
  (
    {
      variant = 'secondary',
      justifyContent = 'center',
      radius,
      label,
      children,
      size = 'm',
      href,
      prefixIcon,
      fillWidth = false,
      weight = 'strong',
      className,
      style,
      ...props
    },
    ref
  ) => {
    const iconSize = size === 'l' ? 's' : size === 'm' ? 's' : 'xs';
    const radiusSize = size === 's' || size === 'm' ? 'm' : 'l';

    return (
      <ElementType
        ref={ref}
        href={href}
        className={cn(
          styles.button,
          styles[variant],
          styles[size],
          radius === 'none'
            ? 'radius-none'
            : radius
            ? `radius-${radiusSize}-${radius}`
            : `radius-${radiusSize}`,
          'text-decoration-none',
          'button',
          'cursor-pointer',
          {
            ['fill-width']: fillWidth,
            ['fit-width']: !fillWidth,
            ['justify-' + justifyContent]: justifyContent,
          },
          className
        )}
        style={style}
        {...props}
      >
        {prefixIcon && <Icon name={prefixIcon} size={iconSize} />}

        {(label || children) && (
          <Flex
            paddingX="4"
            paddingY="0"
            textWeight={weight}
            textSize={size}
            className="font-label"
          >
            {label || children}
          </Flex>
        )}
      </ElementType>
    );
  }
);

Button.displayName = 'Button';

export default Button;
