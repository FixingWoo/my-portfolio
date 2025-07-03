'use client';

import { usePathname } from 'next/navigation';
import styles from './style.module.scss';

import Flex from '../Flex';
import TimeDisplay from '../TimeDisplay';
import ToggleButton from '../ToggleButton';

import { routes, person } from '@/resources';

const Header = () => {
  const pathname = usePathname() ?? '';

  return (
    <Flex
      as="header"
      position="sticky"
      className={styles.position}
      fillWidth
      fitHeight
      zIndex={10}
      padding="8"
      horizontal="center"
      data-border="rounded"
    >
      <Flex
        fillWidth
        vertical="center"
        paddingLeft="12"
        textVariant="body-default-s"
      >
        <Flex hide="s">{person.location}</Flex>
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
          <Flex gap="4" vertical="center" textVariant="body-default-s">
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
      <Flex
        fillWidth
        horizontal="end"
        vertical="center"
        paddingRight="12"
        textVariant="body-default-s"
      >
        <Flex hide="s">
          <TimeDisplay timeZone="Asia/Seoul" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
