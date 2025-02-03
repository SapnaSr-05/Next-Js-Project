'use client';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import Image from 'next/image';
// import log from '../assets/images/log.png'
export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto " >
      <Container>
        <Row className="g-4" style={{ height: '240px' }}>
          <Col md={3}>
            {/* <h5 className="mb-3"><Image src={log} alt=" logo" style={{ width: '150px', height: 'auto' }} /></h5> */}
            {/* <p className="text"></p> */}
            <h5 className="mb-3">Our Product</h5>
            <ul className="list-unstyled">
              <li className="mb-2 ml-6">
                <Link href="/insure-IT" className="text-decoration-none text-light">InsureIt Pro</Link>
              </li>
              <li className="mb-2">
                <Link href="/invest-AI" className="text-decoration-none text-light">InvestAI</Link>
              </li>
              <li className="mb-2">
                <Link href="/avance-test" className="text-decoration-none text-light">AvanceTest</Link>
              </li>
              <li className="mb-2">
                <Link href="/avance-edu" className="text-decoration-none text-light">AvanceEdu Pro</Link>
              </li>
              <li className="mb-2">
                <Link href="/services#support" className="text-decoration-none text-light">Contact Center Software (Dialer)</Link>
              </li>
            </ul>
            
          </Col>
          <Col md={3}>
            <h5 className="mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/services#development" className="text-decoration-none text-light">Systems Integrator</Link>
              </li>
              <li className="mb-2">
                <Link href="/services#solutions" className="text-decoration-none text-light">Custom Software Development</Link>
              </li>
              <li className="mb-2">
                <Link href="/services#consulting" className="text-decoration-none text-light">PMO Outsourcing</Link>
              </li>
              
              <li className="mb-2">
                <Link href="/services#support" className="text-decoration-none text-light">Customized ERP Solutions</Link>
              </li>
              <li className="mb-2">
                <Link href="/services#support" className="text-decoration-none text-light">Digital Marketing</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-decoration-none text-light">Discover Avance</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-light">Case Study</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-decoration-none text-light">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-decoration-none text-light">Blogs</Link>
              </li>
            </ul>
          </Col>
          
          <Col md={3}>
            <h5 className="mb-3">Contact Info</h5>
            <ul className="list-unstyled ">
            <li className="mb-2">Phone:+91-120-4362095</li>
              {/* <li className="mb-2">📍 123 Service Street, City</li> */}
              <li className="mb-2">Email: info@avanceglobal.in</li>
              <li className="mb-2">Address: C-54, 2<sup>nd</sup> Floor, Sector 2 Noida - 201301, Uttar Pradesh, India</li>
            </ul>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-light fs-5"><FaFacebook /></a>
              <a href="#" className="text-light fs-5"><FaTwitter /></a>
              <a href="#" className="text-light fs-5"><FaLinkedin /></a>
              <a href="#" className="text-light fs-5"><FaInstagram /></a>
              
            </div>
          </Col>
        
        </Row>
        {/* <hr className="my-3" /> */}
        <hr className="my-3 full-screen-hr" />

        <div className="text-center">
          <small style={{ marginLeft: '10px', marginRight: '2px' }}>&copy; {new Date().getFullYear()} Avance Globaltech. All rights reserved.</small> <small style={{ marginLeft: '480px', marginRight: '2px' }}>Terms & Conditions | Privacy Policy | Refund Policy</small>
        </div>
      </Container>
    </footer>
  );
}
