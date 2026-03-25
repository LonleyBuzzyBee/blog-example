import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Copyright_footer = () => {
  useEffect(() => {
    // Load ionicons if not already loaded
    if (typeof window !== 'undefined' && !window.customElements.get('ion-icon')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
      script.type = 'module';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <footer className='banner-bottom'>
      <Container fluid="xl">
        <Row className='footer-main'>
          <Col md={2} sm={6} xs={12} className='footer-column'>
            <h5>MY ACCOUNT</h5>
            <ul>
              <li><a href="#signin">Sign In / Register</a></li>
              <li><a href="#wishlist">My Wishlist</a></li>
              <li><a href="#cart">My Cart</a></li>
            </ul>
          </Col>
          <Col md={2} sm={6} xs={12} className='footer-column'>
            <h5>ORDERS & RETURNS</h5>
            <ul>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#refunds">Refunds & Returns</a></li>
              <li><a href="#shipping">Shipping Information</a></li>
              <li><a href="#guarantee">Our Guarantee</a></li>
            </ul>
          </Col>
          <Col md={2} sm={6} xs={12} className='footer-column'>
            <h5>GARDENER'S TOOLKIT</h5>
            <ul>
              <li><a href="#start-garden">How to Start a Garden</a></li>
              <li><a href="#planting-guides">Planting Guides</a></li>
              <li><a href="#blog">Gardening Blog</a></li>
              <li><a href="#photos">Customer Photos</a></li>
              <li><a href="#plant-finder">Plant Finder</a></li>
            </ul>
          </Col>
          <Col md={2} sm={6} xs={12} className='footer-column'>
            <h5>BE SEEDY</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#reviews">Product Reviews</a></li>
              <li><a href="#jobs">Job Opportunities</a></li>
              <li><a href="#affiliate">Affiliate Programs</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12} xs={12} className='footer-column'>
            <h5>GET IN TOUCH</h5>
            <div className='footer-contact'>
              <p>Contact Us</p>
              <p>2099 Brevard Rd., Arden, NC 28704</p>
              <p>855-440-2929</p>
              <p>service@edenbrothers.com</p>
            </div>
          </Col>
        </Row>
        <div className='footer-divider'></div>
        <Row className='footer-social'>
          <Col className='footer-social-icons'>
            <a href="#facebook" aria-label="Facebook">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#pinterest" aria-label="Pinterest">
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#tiktok" aria-label="TikTok">
              <ion-icon name="logo-tiktok"></ion-icon>
            </a>
            <a href="#youtube" aria-label="YouTube">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </Col>
        </Row>
        <div className='footer-divider'></div>
        <Row className='footer-copyright'>
          <Col className='footer-copyright-text'>
            <p>ALL CONTENT ©2025 EDEN BROTHERS AND ITS SUBSIDIARIES. ALL RIGHTS RESERVED. 
              <span className='footer-links'>
                <a href="#privacy">PRIVACY POLICY</a> | 
                <a href="#terms">TERMS & CONDITIONS</a> | 
                <a href="#payment">PAYMENT POLICY</a> | 
                <a href="#disclaimer">DISCLAIMER</a>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Copyright_footer;