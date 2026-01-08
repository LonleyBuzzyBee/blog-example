import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import slide_1_image from '../../assets/slide1.png';
import slide_2_image from '../../assets/slide2.png'
import slide_3_image from '../../assets/slide3.png'
import slide_4_image from '../../assets/slide4.png'

const items = [
  {
    src: slide_1_image,
    altText: 'Slide 1',
  },
  {
    src: slide_2_image,
    altText: 'Slide 2',

  },
  {
    src: slide_3_image,
    altText: 'Slide 3',
   
  },
    {
    src: slide_4_image,
    altText: 'Slide 4',
  }
];

const Carousel = () => {
  return (
    <div className="container-carousel">
      <UncontrolledCarousel items={items} />
    </div>
    
  )
};

export default Carousel;