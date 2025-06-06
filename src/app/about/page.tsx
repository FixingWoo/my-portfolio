import React from 'react';

import Button from '@/components/Button';
import Column from '@/components/Column';
import Flex from '@/components/Flex';
import Heading from '@/components/Heading';
import Text from '@/components/Text';

import styles from './style.module.scss';

import { person, social } from '@/resources';

export default function About() {
  return (
    <Column maxWidth={'m'}>
      <Flex fillWidth horizontal="center" mobileDirection="column">
        <Column flex={9} maxWidth={40}>
          <Column
            fillWidth
            minHeight={'160'}
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            <Flex
              className=""
              gap="8"
              horizontal="center"
              paddingTop="20"
              paddingBottom="8"
              fitWidth
              data-border="rounded"
            >
              {social.map(
                (item) =>
                  item.link && (
                    <React.Fragment key={item.name}>
                      <Button
                        className="s-flex-hide"
                        label={item.name}
                        href={item.link}
                        prefixIcon={item.icon}
                        size="s"
                        variant="secondary"
                      />
                    </React.Fragment>
                  )
              )}
            </Flex>
          </Column>
        </Column>
      </Flex>
    </Column>
  );
}
