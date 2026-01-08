import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import YoutubePlayer from '../youtube-player';

const Card_template = ({ item }) => {
 
  if (item.pic == "") {
    
  }
  return (
      <div className="article_item_video grow">
        <YoutubePlayer
          className='article_item_video_image'
          videoId={item.link}
          width="100%"
        />
      </div>
      
  );
};

export default Card_template;