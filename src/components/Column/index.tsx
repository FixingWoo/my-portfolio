'use client';

import { forwardRef } from 'react';

import Flex from '../Flex';

interface IProps extends React.ComponentProps<typeof Flex> {
  children?: React.ReactNode;
}

const Column = forwardRef<HTMLDivElement, IProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Flex direction="column" ref={ref} {...rest}>
        {children}
      </Flex>
    );
  }
);

Column.displayName = 'Column';

export default Column;
