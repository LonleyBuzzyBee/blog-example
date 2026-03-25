import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const Meetings_info = () =>{
    return (
            <Container fluid className='meetings_info_container'>
                <Row className='meetings_info_row'>
                    <Col  className='meetings_info_col1'>
                        <h4><strong>What We're About</strong></h4>
                        <ul>
                            <li><strong>Region-aware planting:</strong> Every garden exists within a specific ecosystem. We explore which plants thrive where you live, helping you work with nature rather than against it.</li>
                            <li><strong>Climate-conscious gardening:</strong> As growing seasons shift and weather patterns change, we share knowledge on adapting our gardens to a changing world—from drought-tolerant alternatives to understanding new hardiness realities.</li>
                            <li><strong>Practical tips that work:</strong> No gatekeeping here. Whether you're nurturing your first tomato plant or managing an established perennial border, we share honest, tested advice from real gardeners.</li>
                        </ul>   
                    </Col>
                    <Col  className='meetings_info_col2'>
                        <p>
                            There are zoome meetings: <u> 1st monday and 3rd tuesday of the month at 6pm EST</u>.
                            <br/>
                            <br/>
                            In person community meetings organized on <u>meetup.com</u>.
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