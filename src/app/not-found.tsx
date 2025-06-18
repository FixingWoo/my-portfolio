import Column from '@/components/Column';
import Text from '@/components/Text';
import Heading from '@/components/Heading';

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Page Not Found
      </Heading>
    </Column>
  );
}
