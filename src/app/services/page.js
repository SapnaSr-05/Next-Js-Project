'use client';
import NavigationBar from '../../components/Navbar';
import ServiceCard from '../../components/ServiceCard';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaBroom, 
  FaWrench, 
  FaBolt, 
  FaTools,
  FaPaintRoller,
  FaTree,
  FaSnowflake,
  FaTruck
} from 'react-icons/fa';

const allServices = [
  {
    title: 'Insurance Broking Policy Portal',
    description: 'Professional cleaning solutions for homes and offices',
    icon: <FaBroom size={24} />
  },
  {
    title: 'Education Institute Management',
    description: 'Expert plumbing services for all your needs',
    icon: <FaWrench size={24} />
  },
 
  {
    title: 'Enterprise Resource Planning',
    description: 'Professional moving and relocation services',
    icon: <FaTruck size={24} />
  }
];

export default function Services() {
  return (
    <main>
      <NavigationBar />
      <Container className="py-5">
        <h1 className="text-center mb-5">Our Product</h1>
        <Row className="g-4">
          {allServices.map((service) => (
            <Col key={service.title} md={6} lg={3}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
