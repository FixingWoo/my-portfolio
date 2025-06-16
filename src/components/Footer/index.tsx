import Flex from '../Flex';
import IconButton from '../IconButton';
import Text from '../Text';

import styles from './style.module.scss';

import { person, social } from '@/resources';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as={'footer'}
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth={'m'}
        paddingX="16"
        paddingY="8"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>

        <Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                >
                  {item.name}
                </IconButton>
              )
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};

export default Footer;
