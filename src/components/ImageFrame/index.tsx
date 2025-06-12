'use client';

import React, { CSSProperties } from 'react';
import Image from 'next/image';

import Flex from '../Flex';

import styles from './style.module.scss';

interface IProps extends React.ComponentProps<typeof Flex> {
  src: string;
  alt?: string;
  priority?: boolean;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
  objectFit?: CSSProperties['objectFit'];
}

const sizeMapping: Record<'xs' | 's' | 'm' | 'l' | 'xl', number> = {
  xs: 20,
  s: 24,
  m: 32,
  l: 48,
  xl: 160,
};

const ImageFrame: React.FC<IProps> = ({
  src = '',
  alt = '',
  priority,
  size = 'm',
  objectFit = 'cover',
  ...rest
}) => {
  const sizes =
    typeof size === 'string' ? `${sizeMapping[size]}px` : `${size * 16}px`;

  return (
    <>
      <Flex
        className={`${typeof size === 'string' ? styles[size] : ''}`}
        fillWidth
        overflow={'hidden'}
        zIndex={0}
        style={{
          isolation: 'isolate',
        }}
        {...rest}
      >
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          fill
          style={{ objectFit }}
        />
        ;
      </Flex>
    </>
  );
};

ImageFrame.displayName = 'ImageFrame';

export default ImageFrame;
