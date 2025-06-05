import Column from '@/components/Column';
import Flex from '@/components/Flex';
import Heading from '@/components/Heading';
import Text from '@/components/Text';

import styles from './style.module.scss';

import { person } from '@/resources';

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
          </Column>
        </Column>
      </Flex>
    </Column>
  );
}
