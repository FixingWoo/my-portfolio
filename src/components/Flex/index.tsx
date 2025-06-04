'use client';

import { CSSProperties, forwardRef } from 'react';
import cn from 'classnames';

import { SIZES, T_SHIRT_SIZES } from '@/constants';

interface ComponentProps
  extends CommonProps,
    ConditionalProps,
    FlexProps,
    DisplayProps,
    SpacingProps,
    SizeProps {}

const Flex = forwardRef<HTMLDivElement, ComponentProps>(
  (
    {
      as: Component = 'div',
      direction,
      flex,
      center,
      inline,
      padding,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      paddingX,
      paddingY,
      margin,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      marginX,
      marginY,
      width,
      height,
      maxWidth,
      maxHeight,
      minWidth,
      minHeight,
      position = 'relative',
      top,
      right,
      bottom,
      left,
      fit = false,
      fitWidth = false,
      fitHeight = false,
      fill = false,
      fillWidth = false,
      fillHeight = false,
      hide,
      show,
      overflow,
      overflowX,
      overflowY,
      zIndex,
      className,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const classes = cn(
      inline ? 'inline-flex' : 'flex',
      direction && `flex-${direction}`,
      flex && `flex-${flex}`,
      center && 'center',
      padding && `p-${padding}`,
      paddingLeft && `pl-${paddingLeft}`,
      paddingRight && `pr-${paddingRight}`,
      paddingTop && `pt-${paddingTop}`,
      paddingBottom && `pb-${paddingBottom}`,
      paddingX && `px-${paddingX}`,
      paddingY && `py-${paddingY}`,
      margin && `m-${margin}`,
      marginLeft && `ml-${marginLeft}`,
      marginRight && `mr-${marginRight}`,
      marginTop && `mt-${marginTop}`,
      marginBottom && `mb-${marginBottom}`,
      marginX && `mx-${marginX}`,
      marginY && `my-${marginY}`,
      width,
      height,
      maxWidth,
      minWidth,
      minHeight,
      maxHeight,
      position && `${position}`,
      top && `top-${top}`,
      right && `right-${right}`,
      bottom && `bottom-${bottom}`,
      left && `left-${left}`,
      fit && 'fit',
      fitWidth && 'fit-width',
      fitHeight && 'fit-height',
      fill && 'fill',
      fillWidth && !minWidth && 'min-width-0',
      fillHeight && !minHeight && 'min-height-0',
      fill && 'min-height-0',
      fill && 'min-width-0',
      (fillWidth || maxWidth) && 'fill-width',
      (fillHeight || maxHeight) && 'fill-height',
      hide && `${hide}-flex-hide`,
      show && `${show}-flex-show`,
      overflow && `overflow-${overflow}`,
      overflowX && `overflow-x-${overflowX}`,
      overflowY && `overflow-y-${overflowY}`,
      zIndex && `z-index-${zIndex}`,
      className
    );

    const parseSize = (
      value: number | string | undefined,
      type: 'width' | 'height'
    ): string | undefined => {
      if (!value) return undefined;

      if (typeof value === 'number') return `${value}rem`;

      if (typeof value === 'string' && SIZES.includes(value)) {
        return `var(--static-space-${value})`;
      }

      if (typeof value === 'string' && T_SHIRT_SIZES.includes(value)) {
        return `var(--responsive-${type}-${value})`;
      }

      return undefined;
    };

    const combinedStyle: CSSProperties = {
      maxWidth: parseSize(maxWidth, 'width'),
      minWidth: parseSize(minWidth, 'width'),
      minHeight: parseSize(minHeight, 'height'),
      maxHeight: parseSize(maxHeight, 'height'),
      width: parseSize(width, 'width'),
      height: parseSize(height, 'height'),
      ...style,
    };

    return (
      <Component ref={ref} className={classes} style={combinedStyle} {...rest}>
        {children}
      </Component>
    );
  }
);

Flex.displayName = 'Flex';

export default Flex;
