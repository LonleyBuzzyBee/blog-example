import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {members} from '../../models/members';
import { Button, Card, CardImg, CardBody,
    CardTitle, CardText, CardHeader} from 'reactstrap';


const Owl_slider = () => {

    return(
        <OwlCarousel className='owl-theme' center={true}  items={1} loop={true}  nav>
                {members.map((member) => {
                    return (
                            <Card key={member.id}>
                                <CardBody>
                                    <CardTitle tag="h5"><strong>{member.name}</strong></CardTitle>
                                </CardBody>
                                <CardBody>
                                    <img width="100%" alt="Card cap"src={member.pic} />
                                </CardBody>
                                <CardBody >
                                    <CardText>{member.bio}</CardText>
                                </CardBody>
                            </Card>

                    )
                })}
        </OwlCarousel>
    )
}
export default Owl_slider;