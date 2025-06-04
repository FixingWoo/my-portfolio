import React, { ReactNode, forwardRef } from 'react';

import Flex from '../Flex';
import Link from 'next/link';

interface IProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const isExternalLink = (url: string) => /^https?:\/\//.test(url);

const ElementType = forwardRef<HTMLElement, IProps>(
  ({ href, onClick, children, className, style, ...props }, ref) => {
    if (href) {
      const isExternal = isExternalLink(href);

      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={className}
            style={style}
            onClick={onClick}
            {...props}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={className}
          style={style}
          onClick={onClick}
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <Flex
        ref={ref as React.Ref<HTMLDivElement>}
        className={className}
        style={style}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

ElementType.displayName = 'ElementType';

export default ElementType;
