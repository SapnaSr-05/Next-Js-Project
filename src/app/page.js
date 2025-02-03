'use client';

import NavigationBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import ServiceCard from '../components/ServiceCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import OurServices from '../components/OurServices';
import Counters from '../components/Counters';
import Solutions from '../components/Solutions';
import Trusted from '../components/Trusted';
import Projectmind from '../components/Projectmind';
import Recent from '../components/Recent';

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <NavigationBar />
      <HeroSection />
      <Container className="py-5">
      <div>
      <h3 className='Product'>Our Products</h3>
      <div className="product-container">
        <div className="product-item">
          <h2>Insurance Broking Policy Portal</h2>
          <p>"InsureIT Pro" is a single-window login platform for Employee, Business Associates, and Customers to the Insurance Brokers digital journey. The portal offers products like Motor, Health, Life, Personal accident insurance online. Access all users in a single window Customer login to check their policy status</p>
          <a href="#readmore1" className="read-more">Read More</a>
          <div id="readmore1" className="more-info">
          </div>
        </div>
        <div className="product-item">
          <h2>Education Institute Management</h2>
          <p>We have delivered University Management Solution for Universities, Colleges & Schools. This is running successfully to date with clients. By adopting a complete higher education solution that supports and connects departments, users, and institutional goals, you will improve efficiency and productivity campus-wide.</p>
          <a href="#readmore2" className="read-more">Read More</a>
          <div id="readmore2" className="more-info">
          </div>
        </div>
        <div className="product-item">
          <h2>Enterprise Resource Planning</h2>
          <p>We offer ready-made as well as customized Enterprise Resource Planning solutions and have expertise on diverse platforms. We implement the latest technology and entrepreneurial skills to our offerings. These ERP solutions are effective at streamlining business processes that cut across the functional areas of your business.</p>
          <a href="#readmore3" className="read-more">Read More</a>
          <div id="readmore3" className="more-info">
          </div>
        </div>
      </div>
    </div>
      </Container>
      <OurServices/>
    <Counters/>
    <Solutions/>
    <Trusted/>
    <Projectmind/>
    <Recent/>
    </main>

  );
}
