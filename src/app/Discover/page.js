'use client';
import NavigationBar from '../../components/Navbar';
import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <main>
      <NavigationBar />
      <div className="About-container3">
      <div className="About-background-image3">
        <h1 className="About-title3">About Us</h1>
      </div>
    </div>
    <div className="mission-container">
      <div className="mission-content">
        <h2 className="mission-title"><span style={{ color: '#5da8f8' }}>Our Mission </span> is to Make Your Business Better Through Technology.</h2>
        <div className="mission-details">
          <p className="mission-paragraph">
          We believe in delivering simple, secure, and cost-effective solutions, Our Team consistently strives for delivering smart designs, fresh ideas, CRM, ERPs, custom applications development and support and visual concepts of an exceptional standard for every project.<br/>
           <br/>
          We are an innovative end-to-end enterprise solution provider for mission-critical applications, IT Infrastructure Service setups, Intelligent Transportation Systems (ITS)<br/>
            <br/>
          We help you build a robust platform considering the best available resources for Networking, Surveillance & IT Infrastructure Management, and Cyber Security Management, that supports smart AI-integrated audio-visual & multimedia solutions.
          <br/>
          A business is better when it listens to its customers and tailors its products or services to meet their needs.
          </p>
        </div>
      </div>
      <div className="mission-image">
        <img src="./Img/about.jpg" alt="Mission Image" />
      </div>
    </div>
    </main>
  );
}
