import React from 'react';

import Button from '@/components/Button';
import Column from '@/components/Column';
import Flex from '@/components/Flex';
import Heading from '@/components/Heading';
import Text from '@/components/Text';

import styles from './style.module.scss';

import { person, social, about } from '@/resources';

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

          <Column
            textVariant="body-default-l"
            fillWidth
            gap="m"
            marginBottom="xl"
          >
            {about.intro.description}
          </Column>

          <>
            <Heading
              as="h2"
              id={about.work.title}
              marginBottom="m"
              variant="display-strong-m"
            >
              {about.work.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {about.work.experiences.map((experience) => (
                <Column key={`${experience.company}`} fillWidth>
                  <Flex
                    fillWidth
                    vertical="end"
                    horizontal="space-between"
                    marginBottom="4"
                  >
                    <Text id={experience.company} variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text
                      id={experience.period}
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {experience.period}
                    </Text>
                  </Flex>
                  <Text
                    id={experience.role}
                    variant="body-default-s"
                    marginBottom="m"
                    onBackground="brand-weak"
                  >
                    {experience.role}
                  </Text>
                  <Column as={'ul'} gap="16">
                    {/* {experience.achievements.map((achievement) => (
                      <Text
                        as={'li'}
                        variant="body-default-m"
                        key={`${experience.company}`}
                      >
                        {achievement}
                      </Text>
                    ))} */}
                  </Column>
                </Column>
              ))}
            </Column>
          </>

          <>
            <Heading
              as="h2"
              id={about.studies.title}
              marginBottom="m"
              variant="display-strong-m"
            >
              {about.studies.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {about.studies.institutions.map((institution) => (
                <Column key={institution.name} fillWidth gap="4">
                  <Text variant="heading-strong-l">{institution.name}</Text>
                  <Text
                    variant="heading-default-xs"
                    onBackground="neutral-weak"
                  >
                    {institution.department}
                  </Text>
                </Column>
              ))}
            </Column>
          </>
        </Column>
      </Flex>
    </Column>
  );
}
