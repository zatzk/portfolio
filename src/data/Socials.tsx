import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from 'react-icons/fi';
import {
  SiDiscord,
  SiBehance
} from 'react-icons/si';
import {
  MdOutlineArticle
} from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

export default [
  {
    icon: MdOutlineArticle,
    href: '/resume.pdf',
    name: 'resume',
    id: uuidv4(),
  },
  {
    icon: FiGithub,
    href: 'https://github.com/zatzk',
    name: 'github',
    id: uuidv4(),
  },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/zatzk/',
    name: 'linkedin',
    id: uuidv4(),
  },
  {
    icon: SiDiscord,
    href: 'https://discord.com/users/200665359626272769',
    name: 'discord',
    id: uuidv4(),
  },
  {
    icon: FiInstagram,
    href: 'https://www.instagram.com/zatzk',
    name: 'instagram',
    id: uuidv4(),
  },
  {
    icon: SiBehance,
    href: 'https://behance.net/zatzk',
    name: 'behance',
    id: uuidv4(),
  },

]


