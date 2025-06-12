'use client';

import { forwardRef, useState, useEffect } from 'react';
import cn from 'classnames';

import buttonStyles from '../Button/style.module.scss';
import styles from './style.module.scss';

import ElementType from '../ElementType';
import Flex from '../Flex';
import Icon from '../Icon';
import Tooltip from '../Tooltip';

import { IconName } from '../../resources/icon';

interface IProps {
  icon?: IconName;
  id?: string;
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
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  style?: React.CSSProperties;
  href?: string;
}

export type IconButtonProps = IProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = IProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const IconButton = forwardRef<HTMLButtonElement, IProps | AnchorProps>(
  (
    {
      icon = 'refresh',
      className,
      radius,
      style,
      size = 'm',
      variant = 'ghost',
      tooltip,
      tooltipPosition = 'top',
      ...props
    },
    ref
  ) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const radiusSize = size === 's' || size === 'm' ? 'm' : 'l';

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (isHover) {
        timer = setTimeout(() => {
          setTooltipVisible(true);
        }, 400);
      } else {
        setTooltipVisible(false);
      }

      return () => clearTimeout(timer);
    }, [isHover]);

    return (
      <ElementType
        ref={ref}
        className={cn(
          styles.button,
          buttonStyles[variant],
          styles[size],
          className,
          radius === 'none'
            ? 'radius-none'
            : radius
            ? `radius-${radiusSize}-${radius}`
            : `radius-${radiusSize}`,
          'text-decoration-none',
          'button',
          'cursor-interactive',
          className
        )}
        style={style}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        aria-label={tooltip || icon}
        {...props}
      >
        <Flex fill center>
          <Icon name={icon} size="s" />
          {tooltip && isTooltipVisible && (
            <Flex
              position="absolute"
              zIndex={1}
              className={styles[tooltipPosition]}
            >
              <Tooltip label={tooltip} />
            </Flex>
          )}
        </Flex>
      </ElementType>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
