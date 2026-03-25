import React from 'react';
import Carousel2 from '../carousel2';
import YoutubePlayer from '../youtube-player';
import ConnectWithUs from '../connect_with_us';


const About_bio_section = () => {
  return (
    <div className='about_bio_section'>
      <div className='about_bio_section_bottom'>
        <div className='about_bio_section_bottom_1'>
          <p>Sensible Gardening Knowledge began as a small online forum on <u>May 15th, 2023,</u>when a handful of gardeners started swapping tips about what actually grows well in their local climates. What started as casual conversations quickly grew into something bigger as more people joined to share their experiences and learn from one another.</p> 
          <br/>
          <p>In <u>November 2024,</u> the community had grown enough that we decided to make it official—organizing our efforts, establishing our mission, and choosing the name Sensible Gardening Knowledge to reflect what brought us together in the first place.</p>
          <br/>
        </div>
        <div className='about_bio_section_bottom_2'>
          <p>Want to be part of the conversation? Follow us on social media to stay connected and share your gardening journey with us.</p>
          <br/>
        
          <ConnectWithUs />

        </div> 
      </div>

        
              <YoutubePlayer
                className='bio_section_details_v' 
                videoId="https://www.youtube.com/watch?v=vKx40e7LX7g"
                width="100%"
               
              />
     
    </div>
   
   
  );
};
export default About_bio_section;