import React from 'react';
import logo_oswc from '../../assets/s_k_logo_2.png';
import YoutubePlayer from '../youtube-player';


const Landing_bio = () => {
  return (
    <div className="bio_section">
      <div className='bio_section_details'>
        <div className="bio_section_details_p">
          <h3><strong><em>Who are we?</em></strong></h3>
          <br/>
          <p>About Sensible Gardening Knowledge
          We're a community of gardeners united by a simple idea: the right plant in the right place makes all the difference.
          <br/>
          <span className='bio_section_details_p_span_tab'/>
          <br />
          Our mission is to help you make informed choices about what to grow based on your climate, soil, and local conditions. We explore which plants thrive where you live, share knowledge on adapting gardens to a changing climate, and offer practical tips that actually work—whether you're growing your first tomato or managing an established garden.
          <br />
          <span className='bio_section_details_p_span_tab'/>
          <br/>
          Sensible Gardening Knowledge is a place to learn, share, and grow together. When gardeners make thoughtful choices, we create healthier yards and more resilient communities. <em>Dig in and join the conversation.</em>
          <br />
          <div className='bio_section_details_p_logo'>
            <img src={logo_oswc}/>
          </div>

          </p>
        </div>
        <YoutubePlayer 
          className='bio_section_details_v' 
          videoId="https://www.youtube.com/watch?v=vKx40e7LX7g"
          width="100%"
        />
      </div>
    </div>

  );
};

export default Landing_bio;
