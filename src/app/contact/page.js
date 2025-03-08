'use client';
import NavigationBar from '../../components/Navbar';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <main>
      <NavigationBar />
          <div className="Main-container3 py-5">
            <h1 className=' ctt pt-3 px-5'>Contact Us</h1>
      {/* <div className="Main-background-image3">
        <h1 className="Main-title3">Contact Us</h1>
      </div> */}
       </div>
        <Row className='px-5'>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h3>Get in Touch</h3>
            <p>Have questions? We'd love to hear from you.</p>
            <div className="mt-4">
              <h4 className="h5">Email</h4>
              <p>info@avanceglobal.in</p>
              <h4 className="h5 mt-3">Phone</h4>
              <p>+1 (555) 123-4567</p>
              <h4 className="h5 mt-3">Address</h4>
              <p>123 Service Street<br />Business District<br/>City, State 23101</p>
            </div>
            </Col>
        </Row>
        <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1601968196548!5m2!1sen!2sin" width="100%" height="auto" frameBorder="0" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
      {/* </Container> */}
    
    </main>
  );
}

