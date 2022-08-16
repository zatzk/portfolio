import { v4 as uuidv4 } from 'uuid';
import {
  chakra,
  electron,
  figma,
  nextjs,
  nodejs,
  react,
  socketIO,
  storybook,
  typescript
} from './tools';

export default [
  {
    title: 'Gitjobs',
    description: 'A job board built with the Github Jobs API, with reimagined design and functionality.',
    tools: [react, nextjs, typescript, chakra],
    proto: 'null',
    repo: 'https://github.com/gregogun/my-guestbook',
    id: uuidv4(),
  },
  {
    title: 'Google Keep Clone',
    description: 'A simple google keep clone built with vue and firebase',
    tools: [react, nextjs, electron, figma],
    proto: null,
    repo: 'https://github.com/gregogun/portfolio-v2',
    id: uuidv4(),
  },
  {
    title: 'tchurulips',
    description: 'This site! Building the second iteration of my personal portfolio',
    tools: [react, nextjs, storybook, figma],
    proto: null,
    repo: 'https://github.com/gregogun/portfolio-v2',
    id: uuidv4(),
  },
  {
    title: 'Apple Music Embeddable Web Player widget',
    description: 'This site! Building the second iteration of my personal portfolio',
    tools: [react, nextjs, storybook, figma],
    proto: 'null',
    repo: 'https://github.com/gregogun/portfolio-v2',
    id: uuidv4(),
  },
  {
    title: 'vrumvrum',
    description: 'This site! Building the second iteration of my personal portfolio',
    tools: [react, nextjs, storybook, figma],
    proto: 'null',
    repo: 'https://github.com/gregogun/portfolio-v2',
    id: uuidv4(),
  },
]