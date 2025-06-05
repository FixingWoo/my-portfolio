'use client';

import { usePathname } from 'next/navigation';

import Flex from '../Flex';
import TimeDisplay from '../TimeDisplay';
import ToggleButton from '../ToogleButton';

import { routes } from '@/resources/config';

const Header = () => {
  const pathname = usePathname() ?? '';

  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      fillWidth
      fitHeight
      zIndex={10}
      padding="8"
      horizontal="center"
      data-border="rounded"
    >
      <Flex fillWidth vertical="center" paddingLeft="12">
        <Flex hide="s">ddd</Flex>
      </Flex>
      <Flex fillWidth horizontal="center">
        <Flex
          shadow="l"
          background="surface"
          border="neutral-alpha-medium"
          radius="m-4"
          padding="4"
          horizontal="center"
          zIndex={1}
        >
          <Flex gap="4" vertical="center">
            {routes['/about'] && (
              <>
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="person"
                  href="/about"
                  label="About"
                  selected={pathname === '/about'}
                />
                <ToggleButton
                  className="s-flex-show"
                  prefixIcon="person"
                  href="/about"
                  selected={pathname === '/about'}
                />
              </>
            )}
            {routes['/work'] && (
              <>
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="grid"
                  href="/work"
                  label={'Work'}
                  selected={pathname.startsWith('/work')}
                />
                <ToggleButton
                  className="s-flex-show"
                  prefixIcon="grid"
                  href="/work"
                  selected={pathname.startsWith('/work')}
                />
              </>
            )}
            {routes['/blog'] && (
              <>
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="book"
                  href="/blog"
                  label={'Blog'}
                  selected={pathname.startsWith('/blog')}
                />
                <ToggleButton
                  className="s-flex-show"
                  prefixIcon="book"
                  href="/blog"
                  selected={pathname.startsWith('/blog')}
                />
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex fillWidth horizontal="end" vertical="center" paddingRight="12">
        <Flex hide="s">
          <TimeDisplay timeZone="Asia/Seoul" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
