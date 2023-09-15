/* eslint-disable react/prop-types */
import { Container } from '@chakra-ui/react';
import Image from 'next/image';
import { imageData } from '../../data/imageData';

export const Gallery = ({ selectedCategory }: { selectedCategory: string }) => {
  const getImageDataByCategory = () => {
    switch (selectedCategory) {
      case 'posters':
        return imageData.poster;
      case 'ui/ux':
        return imageData.uiUx;
      case 'logos':
        return imageData.logos;
      default:
        return [];
    }
  };

  const images = getImageDataByCategory();

  return (
    <Container minH="100dvh" position="relative" maxW="100%" paddingLeft={{base: '20%', md:'10%', lg: '8%', xl: '6%'}} paddingTop="8rem">
      <div>
        {images.map((image) => (
          <Image key={image.id} src={image.src} width={90} height={90} alt="test" />
        ))}
      </div>
    </Container>
  );
};
