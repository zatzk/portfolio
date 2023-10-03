/* eslint-disable react/prop-types */
import { Container, Spinner } from '@chakra-ui/react';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { useEffect, useState } from "react";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";


export const Gallery = ({ selectedCategory, imgFetched }: { selectedCategory: string, imgFetched: any }) => {
  const [index, setIndex] = useState(-1);
  const [imagesLoaded, setImagesLoaded] = useState(false); // Track if all images are loaded

  useEffect(() => {
    const imageElements = document.querySelectorAll('.gallery-image');

    const handleImageLoad = () => {
      const loadedImages = Array.from(imageElements).filter((image) => {
        return (image as HTMLImageElement).complete;
      });

      if (loadedImages.length === imageElements.length) {
        setImagesLoaded(true); // All images are loaded
      }
    };

    handleImageLoad(); // Check initial load state

    imageElements.forEach((image) => {
      image.addEventListener('load', handleImageLoad);
    });

    return () => {
      // Clean up event listeners
      imageElements.forEach((image) => {
        image.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);
  
  const getImageDataByCategory = () => {
    switch (selectedCategory) {
      case 'posters':
        return imgFetched.filter((image: any) => image.type === 'poster');
      case 'ui/ux':
        return imgFetched.filter((image: any) => image.type === 'ui/ux');
      case 'logos':
        return imgFetched.filter((image: any) => image.type === 'logos');
      default:
        return [];
    }
  };  
  const images = getImageDataByCategory();

  
  const getSlides = images.map((image: any) => {
    return {
      src: image.imageSrc,
      width: image.width,
      height: image.height
    }
  });


  return (
    <Container minH="100dvh" position="relative" maxW="100%" paddingLeft={{base: '20%', md:'10%', lg: '8%', xl: '6%'}} paddingTop="8rem">
      {!imagesLoaded && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#F65252"
          size="xl"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
      )}
      {imagesLoaded && (
        <>
          <PhotoAlbum
            photos={getSlides} 
            layout="rows" 
            targetRowHeight={500} 
            onClick={({ index }) => setIndex(index)} 
          />
          <Lightbox
            slides={getSlides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </>
      )}
    </Container>
  );
};

