'use client';

import React from 'react';

import Column from '../Column';
import Flex from '../Flex';
import Text from '../Text';

import styles from './style.module.scss';

interface IProps {
  structure: {
    title: string;
    items: string[];
  }[];
}

const Anchor: React.FC<IProps> = ({ structure }) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Column
      style={{
        top: '50%',
        transform: 'translateY(-50%)',
        whiteSpace: 'nowrap',
      }}
      position={'fixed'}
      left="0"
      gap="32"
      paddingLeft="24"
      hide="m"
    >
      {structure.map((section, index) => (
        <Column key={index} gap="12">
          <Flex
            onClick={() => scrollTo(section.title, 80)}
            cursor="pointer"
            className={styles.hover}
            gap="8"
            vertical="center"
          >
            <Flex height="1" minWidth="16" background="neutral-strong"></Flex>
            <Text wrap="nowrap">{section.title}</Text>
          </Flex>
        </Column>
      ))}
    </Column>
  );
};

export default Anchor;
