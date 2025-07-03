'use client';

import { forwardRef, ReactNode } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

import ElementType from '../ElementType';
import Flex from '../Flex';
import Icon from '../Icon';

import { IconName } from '../../resources/icon';

interface IProps {
  href?: string;
  className?: string;
  variant?: 'ghost' | 'outline';
  size?: 's' | 'm' | 'l';
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
  selected?: boolean;
  label?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  justifyContent?: 'start' | 'center' | 'end' | 'space-between';
  prefixIcon?: IconName;
}

const ToggleButton = forwardRef<HTMLElement, IProps>(
  (
    {
      href,
      className,
      variant = 'ghost',
      size = 'm',
      radius,
      selected = false,
      label,
      style,
      children,
      justifyContent = 'center',
      prefixIcon,
      ...props
    },
    ref
  ) => {
    return (
      <ElementType
        ref={ref}
        href={href}
        className={cn(
          styles.button,
          styles[variant],
          styles[size],
          selected && styles.selected,
          radius === 'none'
            ? 'radius-none'
            : radius
            ? `radius-${size}-${radius}`
            : `radius-${size}`,
          'text-decoration-none',
          className
        )}
        style={style}
        {...props}
      >
        {prefixIcon && (
          <Icon name={prefixIcon} size={size === 'l' ? 's' : 'xs'} />
        )}
        <Flex horizontal={justifyContent} position="static">
          {label || children}
        </Flex>
      </ElementType>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;
