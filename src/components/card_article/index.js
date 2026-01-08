import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button , CardSubtitle, CardLink} from 'reactstrap';

const Card_article = ({ item }) => {
 
  return (
    // <div className="article_item grow">
        <a href={item.link} className="article_item grow">
          <CardImg top className='article_item_image' src={item.pic} alt="Card image cap" />
          <div>
            {/* <hr/> */}
            <h4><strong>{item.title}</strong></h4>
            <p>{item.auth}<br/>{item.date}</p>
          </div>
        </a>
        // </div>
  );
};

export default Card_article;