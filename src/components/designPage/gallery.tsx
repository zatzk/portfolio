/* eslint-disable react/prop-types */
import { Container } from '@chakra-ui/react';
import Image from 'next/image';
import { SimpleGrid } from '@chakra-ui/react';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";


export const Gallery = ({ selectedCategory, imgFetched }: { selectedCategory: string, imgFetched: any }) => {
  const [index, setIndex] = useState(-1);
  

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
    const width = 1080;
    const height = 1350;
    return {
      src: image.imageSrc,
      width,
      height
    }
  });


  return (
    <Container minH="100dvh" position="relative" maxW="100%" paddingLeft={{base: '20%', md:'10%', lg: '8%', xl: '6%'}} paddingTop="8rem">
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
        // enable optional lightbox plugins
        // plugins={[Slideshow, Zoom]}
      />
      
      {/* <SimpleGrid
        flexWrap="wrap"
        display="grid"
        minChildWidth="18.5em"
        columns={[1, 2, 3]}
        gap="1rem"
        padding="0px"
      >
      {images.map((image) => (
        <Image 
          key={image.id} 
          src={image.imageSrc} 
          width={500} 
          height={500} 
          alt="test" 
          onClick={(({index: current}) => setIndex(image.id))}
          />
        ))}
        <Lightbox
          index={index}
          position="absolute"
          slides={getSlides}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </SimpleGrid>
     */}
    </Container>
  );
};

