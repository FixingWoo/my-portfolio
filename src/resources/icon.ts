import { IconType } from 'react-icons';

import { HiEnvelope, HiMiniGlobeAsiaAustralia } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa6';

import {
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
} from 'react-icons/pi';

export const iconLibrary: Record<string, IconType> = {
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  email: HiEnvelope,
  github: FaGithub,
  global: HiMiniGlobeAsiaAustralia,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
