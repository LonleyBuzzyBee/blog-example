import React from 'react';
import logo_oswc from '../../assets/s_k_logo.png';
import YoutubePlayer from '../youtube-player';


const Landing_bio = () => {
  return (
    <div className="bio_section">
      <div className='bio_section_details'>
        <div className="bio_section_details_p">
          <h3><strong><em>Who are we?</em></strong></h3>
          <br/>
          <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
          <br/>
          <span className='bio_section_details_p_span_tab'/>
          <br />
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
          <br />
          <span className='bio_section_details_p_span_tab'/>
          <br/>
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu<em>ikjrghik </em>
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
