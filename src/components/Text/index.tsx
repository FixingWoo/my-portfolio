'use client';

import { ElementType, ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';

import { getVariantClasses, generateClassName } from '@/utils';

type IProps<T extends ElementType> = TextProps<T> &
  CommonProps &
  SpacingProps &
  ComponentPropsWithoutRef<T>;

const Text = <T extends ElementType = 'span'>({
  as,
  align,
  onBackground,
  variant,
  wrap = 'balance',
  size,
  weight,
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
  children,
  style,
  className,
  ...props
}: IProps<T>) => {
  const Component = as || 'span';

  const sizeClass = size ? `font-${size}` : '';
  const weightClass = weight ? `font-${weight}` : '';

  const classes = variant
    ? getVariantClasses(variant)
    : [sizeClass, weightClass];

  let colorClass = '';

  if (onBackground) {
    const [scheme, weight] = onBackground.split('-') as [
      ColorScheme,
      ColorWeight
    ];

    colorClass = `${scheme}-on-background-${weight}`;
  }

  const combinedClasses = cn(
    ...classes,
    className,
    colorClass,
    generateClassName('p', padding),
    generateClassName('pl', paddingLeft),
    generateClassName('pr', paddingRight),
    generateClassName('pt', paddingTop),
    generateClassName('pb', paddingBottom),
    generateClassName('px', paddingX),
    generateClassName('py', paddingY),
    generateClassName('m', margin),
    generateClassName('ml', marginLeft),
    generateClassName('mr', marginRight),
    generateClassName('mt', marginTop),
    generateClassName('mb', marginBottom),
    generateClassName('mx', marginX),
    generateClassName('my', marginY)
  );

  return (
    <Component
      className={combinedClasses}
      style={{
        textAlign: align,
        textWrap: wrap,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

Text.displayName = 'Text';

export default Text;
