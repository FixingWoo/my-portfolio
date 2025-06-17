import '@/styles/index.scss';
import '@/tokens/index.scss';
import styles from './style.module.scss';

import type { Metadata } from 'next';

import cn from 'classnames';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Flex from '@/components/Flex';

import { style, font } from '@/resources';

export const metadata: Metadata = {
  title: 'Jungwu Portfolio',
  description: 'Jungwu Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-solid={style.solid}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={cn(font.primary.variable)}
    >
      <body
        className="relative flex flex-column min-width-0 fill-width p-0 m-0"
        data-theme="light"
      >
        <div className={styles.mask}>
          <div className={styles.background}></div>
        </div>
        <Flex fillWidth minHeight={'16'} hide="s" />
        <Flex
          className={styles.fadeMask}
          zIndex={10}
          fillWidth
          position={'fixed'}
          height={'80'}
          hide="s"
        ></Flex>
        <Header />
        <Flex
          zIndex={0}
          flex={1}
          fillWidth
          paddingX="l"
          paddingY="l"
          horizontal="center"
        >
          <Flex fillWidth minHeight={0} horizontal="center">
            {children}
          </Flex>
        </Flex>
        <Footer />
      </body>
    </Flex>
  );
}
