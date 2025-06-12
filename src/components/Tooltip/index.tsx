'use client';

import React, { forwardRef, ReactNode } from 'react';
import cn from 'classnames';

import Flex from '../Flex';

interface IProps {
  label: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Tooltip = forwardRef<HTMLDivElement, IProps>(
  ({ label, className, style }, ref) => {
    return (
      <Flex
        ref={ref}
        className={cn(className)}
        hide="m"
        style={{
          whiteSpace: 'nowrap',
          userSelect: 'none',
          ...style,
        }}
        vertical="center"
        gap="4"
        zIndex={1}
        background="surface"
        paddingX="8"
        paddingY="4"
        radius="s"
        border="neutral-medium"
        role="tooltip"
        data-border="rounded"
      >
        <Flex
          paddingX="2"
          vertical="center"
          textVariant="body-default-xs"
          onBackground="neutral-strong"
        >
          {label}
        </Flex>
      </Flex>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
