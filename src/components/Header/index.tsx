'use client';

import Flex from '@/components/Flex';
import TimeDisplay from '@/components/TimeDisplay';

const Header = () => {
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
            <Flex>About</Flex>
            <Flex>Work</Flex>
            <Flex>Blog</Flex>
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
