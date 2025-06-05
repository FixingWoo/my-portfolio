import { IconType } from 'react-icons';

import {
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
} from 'react-icons/pi';

export const iconLibrary: Record<string, IconType> = {
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
