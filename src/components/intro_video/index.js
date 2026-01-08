import React from 'react';
import YoutubePlayer from '../youtube-player';

const Intro_video = () => {
    return(
        <div className="intro_video">
            <YoutubePlayer 
                videoId="https://www.youtube.com/embed/vKx40e7LX7g?si=oeZ6rgJU6stf7gjk"
                width={560}
            />
        </div>
    );
};
export default Intro_video;