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
      <Container className="py-5">
        <h1 className="mb-4">Contact Us</h1>
        <Row>
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
              <p>support@servicehub.com</p>
              
              <h4 className="h5 mt-3">Phone</h4>
              <p>+1 (555) 123-4567</p>
              
              <h4 className="h5 mt-3">Address</h4>
              <p>123 Service Street<br />Business District<br />City, State 12345</p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
