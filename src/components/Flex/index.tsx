'use client';

import { CSSProperties, forwardRef, HTMLAttributes } from 'react';
import cn from 'classnames';

import { SIZES, T_SHIRT_SIZES } from '@/constants';
import { getVariantClasses } from '@/utils';

interface ComponentProps
  extends HTMLAttributes<HTMLDivElement>,
    FlexProps,
    SpacingProps,
    SizeProps,
    StyleProps,
    CommonProps,
    DisplayProps,
    ConditionalProps {}

const Flex = forwardRef<HTMLDivElement, ComponentProps>(
  (
    {
      as: Component = 'div',
      cursor,
      mobileDirection,
      textVariant,
      textSize,
      textWeight,
      inline,
      background,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
      borderStyle,
      borderWidth,
      radius,
      direction,
      flex,
      horizontal,
      vertical,
      center,
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
      shadow,
      solid,
      gap,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const sizeClass = textSize ? `font-${textSize}` : '';
    const weightClass = textWeight ? `font-${textWeight}` : '';

    const variantClasses = textVariant
      ? getVariantClasses(textVariant)
      : [sizeClass, weightClass];
    const generateDynamicClass = (type: string, value: string | undefined) => {
      if (!value) return undefined;

      if (value === 'transparent') {
        return `transparent-border`;
      }

      if (['surface', 'page', 'overlay'].includes(value)) {
        return `${value}-${type}`;
      }

      const parts = value.split('-');
      if (parts.includes('alpha')) {
        const [scheme, , weight] = parts;
        return `${scheme}-${type}-alpha-${weight}`;
      }

      const [scheme, weight] = value.split('-') as [ColorScheme, ColorWeight];
      return `${scheme}-${type}-${weight}`;
    };

    const classes = cn(
      cursor && `cursor-${cursor}`,
      mobileDirection && `s-flex-${mobileDirection}`,
      inline ? 'inline-flex' : 'flex',
      generateDynamicClass('background', background),
      generateDynamicClass('solid', solid),
      generateDynamicClass(
        'border',
        border || borderTop || borderRight || borderBottom || borderLeft
      ),
      (border || borderTop || borderRight || borderBottom || borderLeft) &&
        !borderStyle &&
        'border-solid',
      border && !borderWidth && 'border-1',
      (borderTop || borderRight || borderBottom || borderLeft) &&
        'border-reset',
      border && !borderWidth && 'border-1',
      borderTop && 'border-top-1',
      borderRight && 'border-right-1',
      borderBottom && 'border-bottom-1',
      borderLeft && 'border-left-1',
      borderWidth && `border-${borderWidth}`,
      borderStyle && `border-${borderStyle}`,
      radius === 'full' ? 'radius-full' : radius && `radius-${radius}`,
      direction && `flex-${direction}`,
      flex && `flex-${flex}`,
      horizontal &&
        (direction === 'row' ||
        direction === 'row-reverse' ||
        direction === undefined
          ? `justify-${horizontal}`
          : `align-${horizontal}`),
      vertical &&
        (direction === 'row' ||
        direction === 'row-reverse' ||
        direction === undefined
          ? `align-${vertical}`
          : `justify-${vertical}`),
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
      shadow && `shadow-${shadow}`,
      gap && `g-${gap}`,
      ...variantClasses,
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
