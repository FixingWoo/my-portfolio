'use client';

import { forwardRef } from 'react';
import { IconType } from 'react-icons';
import cn from 'classnames';
import styles from './style.module.scss';

import Flex from '../Flex';

import { IconName, iconLibrary } from '../../resources/icon';

interface IProps extends React.ComponentProps<typeof Flex> {
  name: IconName;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  decorative?: boolean;
}

const Icon = forwardRef<HTMLDivElement, IProps>(
  ({ name, size = 'm', decorative = true, ...rest }, ref) => {
    const IconComponent: IconType | undefined = iconLibrary[name];

    return (
      <Flex
        className={cn(styles[size])}
        as="span"
        inline
        fit
        ref={ref}
        {...rest}
      >
        <IconComponent />
      </Flex>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
