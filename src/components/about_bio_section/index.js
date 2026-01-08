import React from 'react';
import Carousel2 from '../carousel2';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import YoutubePlayer from '../youtube-player';


const About_bio_section = () => {
  return (
    <div className='about_bio_section'>
      <div className='about_bio_section_bottom'>
        <div className='about_bio_section_bottom_1'>
          <p>In <u>November 2025</u>, Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc</p> 
          <br/>
          <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc</p>
          <br/>
          <p>In <u>March 2026</u>, Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc</p>
          <br/>
        </div>
        <div className='about_bio_section_bottom_2'>
          <p><u>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc</u>.</p>
          <br/>
          <p><u>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc</u>.</p>
          <br/>
          <Card className="socials_card">
            <Card>
              <CardBody>
                <CardTitle className="socials_card_title">Connect with us</CardTitle>
                <CardText className="socials_card_body">
                  <a href='https://www.instagram.com/oswcgroup/' className='socials_card_icon'>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a> 
                  <a href='https://twitter.com/orsexworkers' className='socials_card_icon'>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a> 
                </CardText>
                <CardText>sit amet adipiscing sem neque sed ipsum. Nam quam nunc</CardText>
              </CardBody>
            </Card>
          </Card>

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