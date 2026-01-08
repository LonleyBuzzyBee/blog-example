import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const Meetings_info = () =>{
    return (
            <Container fluid="xl" className='meetings_info_container'>
                <Row className='meetings_info_row'>
                    <Col  className='meetings_info_col1'>
                        <h4><strong>Lorem ipsum dolor sit amet?</strong></h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing</li>
                        </ul>   
                    </Col>
                    <Col  className='meetings_info_col2'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing: <u> consectetuer adipiscing</u>.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, cons <u>Ltetuer adipiscing</u>.
                            <br />
                            <br/>
                            To join and inquire further, email <strong className='bio_section_details_p_span_highlight'>emailemail@email.com</strong> 
                        </p>
                    </Col>
                </Row>
            </Container>
    );
};
export default Meetings_info;