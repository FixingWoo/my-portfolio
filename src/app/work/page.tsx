import Column from '@/components/Column';
import Flex from '@/components/Flex';
import Heading from '@/components/Heading';

import { Meta } from '@/modules';
import { work } from '@/resources';

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
  });
}

export default function Work() {
  return (
    <Column maxWidth={'m'}>
      <Flex fillWidth horizontal="center" paddingTop="48">
        <Heading variant="display-strong-m">Coming Soon</Heading>
      </Flex>
    </Column>
  );
}
