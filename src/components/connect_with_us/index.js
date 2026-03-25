import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

export default function ConnectWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    formType: 'inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Ion-icons are already loaded in public/index.html, but we can ensure they're available
    if (typeof window !== 'undefined' && !window.customElements.get('ion-icon')) {
      const script1 = document.createElement('script');
      script1.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
      script1.type = 'module';
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
      script2.noModule = true;
      document.head.appendChild(script2);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Implement nodemailer backend endpoint
      // For now, simulate API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', formType: formData.formType });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='connect_with_us_container'>
      <Card className="socials_card">
        <CardBody>
          <CardTitle className="socials_card_title">Connect with us</CardTitle>
          
          {/* Social Icons */}
          <CardText className="socials_card_body">
            <a 
              href='https://www.instagram.com/oswcgroup/' 
              className='socials_card_icon'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a> 
            <a 
              href='https://twitter.com/orsexworkers' 
              className='socials_card_icon'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a> 
          </CardText>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.2)', margin: '24px 0' }} />

          {/* Form Type Selection */}
          <div className="connect_with_us_form_type">
            <label className="connect_with_us_radio_label">
              <input
                type="radio"
                name="formType"
                value="inquiry"
                checked={formData.formType === 'inquiry'}
                onChange={handleChange}
                className="connect_with_us_radio"
              />
              General Inquiry
            </label>
            <label className="connect_with_us_radio_label">
              <input
                type="radio"
                name="formType"
                value="newsletter"
                checked={formData.formType === 'newsletter'}
                onChange={handleChange}
                className="connect_with_us_radio"
              />
              Newsletter Signup
            </label>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="connect_with_us_form">
            <div className="connect_with_us_field">
              <label className="connect_with_us_label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="connect_with_us_input"
              />
            </div>

            <div className="connect_with_us_field">
              <label className="connect_with_us_label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="connect_with_us_input"
              />
            </div>

            {formData.formType === 'inquiry' && (
              <div className="connect_with_us_field">
                <label className="connect_with_us_label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can we help you?"
                  className="connect_with_us_textarea"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="connect_with_us_button"
            >
              {isSubmitting 
                ? 'Sending...' 
                : formData.formType === 'newsletter' 
                  ? 'Subscribe' 
                  : 'Send Message'
              }
            </button>

            {submitStatus === 'success' && (
              <p className="connect_with_us_success">
                {formData.formType === 'newsletter' 
                  ? 'Thanks for subscribing!' 
                  : 'Message sent successfully!'
                }
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="connect_with_us_error">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

