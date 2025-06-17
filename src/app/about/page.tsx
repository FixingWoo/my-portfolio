import React from 'react';

import Anchor from '@/components/Anchor';
import Button from '@/components/Button';
import Column from '@/components/Column';
import Flex from '@/components/Flex';
import Heading from '@/components/Heading';
import ImageFrame from '@/components/ImageFrame';
import Text from '@/components/Text';
import IconButton from '@/components/IconButton';

import styles from './style.module.scss';

import { Meta } from '@/modules';

import { person, social, about } from '@/resources';

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      items: [],
    },
    {
      title: about.work.title,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      items: about.technical.categories.map((skill) => skill.name),
    },
  ];

  return (
    <Column maxWidth={'m'}>
      <Column
        position={'fixed'}
        left="0"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        paddingLeft="24"
        gap="32"
        hide="s"
      >
        <Anchor structure={structure} />
      </Column>

      <Flex fillWidth horizontal="center" mobileDirection="column">
        {about.avatar.display && (
          <Column
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <ImageFrame src={person.image} radius="full" fill size="xl" />
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
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
              className={styles.blockAlign}
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

                      <IconButton
                        className="s-flex-show"
                        icon={item.icon}
                        href={item.link}
                        size="l"
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
                    {experience.achievements.map((achievement, index) => (
                      <Text
                        as={'li'}
                        variant="body-default-m"
                        key={`${experience.company}-${index}`}
                      >
                        {achievement}
                      </Text>
                    ))}
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
                <Column key={`${institution.name}`} fillWidth>
                  <Flex
                    fillWidth
                    vertical="end"
                    horizontal="space-between"
                    marginBottom="4"
                  >
                    <Text variant="heading-strong-l">{institution.name}</Text>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {institution.period}
                    </Text>
                  </Flex>
                  <Text
                    id={institution.name}
                    variant="body-default-m"
                    marginBottom="m"
                    onBackground="neutral-weak"
                  >
                    {institution.department}
                  </Text>
                </Column>
              ))}
            </Column>
          </>

          <>
            <Heading
              as="h2"
              id={about.technical.title}
              marginBottom="m"
              variant="display-strong-m"
            >
              {about.technical.title}
            </Heading>

            <Column fillWidth gap="l" marginBottom="40">
              {about.technical.categories.map((category) => (
                <Column key={category.name} fillWidth gap="4">
                  <Text variant="heading-strong-l">{category.name}</Text>

                  <Text
                    as={'li'}
                    variant="heading-default-xs"
                    onBackground="neutral-weak"
                  >
                    {category.items.join(', ')}
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
