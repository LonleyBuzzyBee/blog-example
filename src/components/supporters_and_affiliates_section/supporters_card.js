import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle
} from 'reactstrap';
  
const Supporters_card = ({supporter}) => {
  return (
      <Card className='supporters_card_section'>
        <CardImg width="40%" className='supporters_card_section_img' src={supporter.pic } alt="Card image cap"/>
        <CardBody>
          <CardTitle tag='h7'> <strong>{supporter.name}</strong></CardTitle>
        </CardBody>
      </Card>
  );
};
export default Supporters_card;