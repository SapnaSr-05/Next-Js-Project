'use client';
import Link from 'next/link';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="home-container bg-light py-5">
      <div className="content">
        {/* Content for the Home page */}
        <h3>Creating software with atmost precision
to <br/>match your.
          <span style={{ color: '#5da8f8' }}> Distinct Business & Technology.</span></h3>
        <p className='contact-p'>"We proudly stand as the premier Information Technologies<br />
          provider, delivering unparalleled solutions for a digital world.”</p>
        <div className="buttons">
          {/* {/* Link to the LearnMore page  */}

          <Link href="/DiscoverAvance">

            <button className="custom-button1">Read More</button>

          </Link>

          {/* Link to the Contact page */}
          <Link href="/contact">
            <button className="custom-button2">Contact Us</button>

          </Link>
        </div>
      </div>
      {/* Image Section */}
      <div className="image-container">
        <img src="./Img/i2.png" alt="Your Image" />
      </div>
    </div>
  );
}
