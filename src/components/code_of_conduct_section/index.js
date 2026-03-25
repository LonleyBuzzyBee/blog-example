import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap';

const Code_of_conduct = () =>{
    return (
        // <div className='meetings_info'>
            <Container fluid="xl" className='meetings_info_container'>
                <Row className='meetings_info_row'>
                    <Col  className='coc_info_col1'>
            
                        <h4><strong>Sensible Gardening Knowledge Community Code of Conduct</strong></h4>
                        <br/>
                        <p>Welcome to our community! To keep this a positive and helpful space for gardeners of all experience levels, we ask that all members follow these guidelines.</p>
                        <br/>
                            <img src={"https://res.cloudinary.com/dmqh4oxdf/image/upload/v1769131619/bullet-1_rkk9jz.png"}/> <br/>
                            <p>Be Respectful Treat fellow members with kindness and courtesy. We come from different climates, growing conditions, and backgrounds—what works in one garden may not work in another. Respect those differences.</p>
                            <img src={"https://res.cloudinary.com/dmqh4oxdf/image/upload/v1769131633/bullet-2_nejwu6.png"}/><br/>
                            <p>Share Honestly When offering advice, share what has worked for you and be clear about your experience level and growing conditions. Avoid presenting personal opinions as universal facts, and be open to learning from others.</p>
                            <img src={"https://res.cloudinary.com/dmqh4oxdf/image/upload/v1769131661/bullet-3_uk1gjk.png"}/><br/>
                            <p>Stay On Topic
                            Keep discussions focused on gardening, plants, climate-related growing topics, and related subjects. Off-topic posts may be removed to maintain the community's purpose.</p>
                            <img src={"https://res.cloudinary.com/dmqh4oxdf/image/upload/v1769131607/bullet-3_1_wjbxw0.png"}/><br/>
                            <p>No Spam or Self-Promotion Excessive promotion of products, services, or external links is not permitted. If you want to share a helpful resource, make sure it genuinely benefits the community.</p>
                       
   
                    </Col>
                    
                </Row>
            </Container>
     
    );
};
export default Code_of_conduct;