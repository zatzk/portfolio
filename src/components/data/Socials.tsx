import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from 'react-icons/fi';
import {
  SiDiscord,
  SiBehance
} from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

export default [
  {
    icon: FiGithub,
    href: 'https://github.com/zatzk',
    name: 'github',
    color: '#04E0D9',
    id: uuidv4(),
  },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/zatzk/',
    name: 'linkedin',
    color: '#04E0D9',
    id: uuidv4(),
  },
  {
    icon: SiDiscord,
    href: 'discord.com/users/200665359626272769',
    name: 'discord',
    color: '#04E0D9',
    id: uuidv4(),
  },
  {
    icon: FiInstagram,
    href: 'https://www.instagram.com/zatzk',
    name: 'instagram',
    color: '#04E0D9',
    id: uuidv4(),
  },
  {
    icon: SiBehance,
    href: 'https://behance.net/zatzk',
    name: 'behance',
    color: '#04E0D9',
    id: uuidv4(),
  }
]


