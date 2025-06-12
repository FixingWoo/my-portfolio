import { Metadata as NextMetadata } from 'next';

interface IProps {
  title: string;
}

export function generateMetadata({ title }: IProps): NextMetadata {
  return {
    title,
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export const Meta = {
  generate: generateMetadata,
};

export default Meta;
