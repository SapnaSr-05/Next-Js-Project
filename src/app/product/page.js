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
    title: 'Cleaning Services',
    description: 'Professional cleaning solutions for homes and offices',
    icon: <FaBroom size={24} />
  },
  {
    title: 'Plumbing',
    description: 'Expert plumbing services for all your needs',
    icon: <FaWrench size={24} />
  },
  {
    title: 'Electrical Work',
    description: 'Licensed electrical services for your safety',
    icon: <FaBolt size={24} />
  },
  {
    title: 'Home Repair',
    description: 'General home maintenance and repair services',
    icon: <FaTools size={24} />
  },
  {
    title: 'Painting',
    description: 'Interior and exterior painting services',
    icon: <FaPaintRoller size={24} />
  },
  {
    title: 'Landscaping',
    description: 'Professional garden and lawn care services',
    icon: <FaTree size={24} />
  },
  {
    title: 'HVAC Services',
    description: 'Heating, ventilation, and air conditioning services',
    icon: <FaSnowflake size={24} />
  },
  {
    title: 'Moving Services',
    description: 'Professional moving and relocation services',
    icon: <FaTruck size={24} />
  }
];

export default function Services() {
  return (
    <main>
      <NavigationBar />
      <Container className="py-5">
        <h1 className="text-center mb-5">Our Services</h1>
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
