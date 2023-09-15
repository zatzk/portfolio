import { v4 as uuidv4 } from 'uuid';

// Create separate arrays for each category
const posterImages = [
  {
    id: uuidv4(),
    src: '/images/images_API/1.jpg',
    thumb: '/images/images_API/thumb/th1.jpg',
  },
  {
    id: uuidv4(),
    src: '/images/images_API/4.jpg',
    thumb: '/images/images_API/thumb/th4.jpg',
  },
  {
    id: uuidv4(),
    src: '/images/images_API/7.jpg',
    thumb: '/images/images_API/thumb/th7.jpg',
  },
];

const uiUxImages = [
  {
    id: uuidv4(),
    src: '/images/images_API/2.jpg',
    thumb: '/images/images_API/thumb/th2.jpg',
  },
  {
    id: uuidv4(),
    src: '/images/images_API/5.jpg',
    thumb: '/images/images_API/thumb/th5.jpg',
  },
  {
    id: uuidv4(),
    src: '/images/images_API/8.jpg',
    thumb: '/images/images_API/thumb/th8.jpg',
  },
];

const logosImages = [
  {
    id: uuidv4(),
    src: '/images/images_API/3.jpg',
    thumb: '/images/images_API/thumb/th3.jpg',
  },
  {
    id: uuidv4(),
    src: '/images/images_API/6.jpg',
    thumb: '/images/images_API/thumb/th6.jpg',
  },
];

// Export the categorized arrays
export const imageData = {
  poster: posterImages,
  uiUx: uiUxImages,
  logos: logosImages,
};
