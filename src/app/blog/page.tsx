import Column from '@/components/Column';
import Flex from '@/components/Flex';
import Heading from '@/components/Heading';

import { Meta } from '@/modules';
import { blog } from '@/resources';

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
  });
}

export default function Blog() {
  return (
    <Column maxWidth={'m'}>
      <Flex fillWidth horizontal="center" paddingTop="48">
        <Heading variant="display-strong-m">Coming Soon</Heading>
      </Flex>
    </Column>
  );
}
