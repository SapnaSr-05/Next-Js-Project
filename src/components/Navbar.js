'use client';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import logo1 from '../assets/images/logo1.png'
const serviceCategories = {
  services: [
    { name: 'Infrastructure', href: '/services/Infrastructer' },
    { name: 'Systems Integrator', href: '/services/Systems-Integrator' },
    { name: 'Custom Software Development', href: '/services/custom-software' },
    { name: 'PMO OutSourcing', href: '/services/PMO-outsourcing' },
    { name: 'Call Center Setup & Operations', href: '/services/Call-center' },
    { name: 'Customized ERP Solutions', href: '/services/Customized' },
    { name: 'Digital Marketing', href: '/services/Digital-marketing' }
  ],
  product: [
    // { name: '', href: '/product/' }, 
    { name: 'InsureIt Pro', href: '/product/insure-IT' },
    { name: 'InvestAI', href: '/product/invest-AI' },
    { name: 'AvanceTest', href: '/product/avance-test' },
    { name: 'AvanceEdu Pro', href: '/product/avance-edu' }
  ],
  trainings: [
    { name: 'On Demand IT/Software Training', href: '/trainings/On-demand' },
    { name: 'Compliance at Workplace', href: '/trainings/Compliance' },
    { name: 'Technical Analysis For Capital Market', href: '/trainings/Analysis' },
  ]
};

export default function NavigationBar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Navbar 
  bg="light" 
  expand="lg" 
  className="shadow-sm fixed-top" 
  style={{ height: '60px' }} // Adjust the height here
>
  <Container>
    <Link href="/" passHref legacyBehavior>
      <Navbar.Brand className="text-primary fw-bold">
        <Image src={logo1} alt="logo" style={{ width: '170px', height: '60px' }} />
      </Navbar.Brand>
    </Link>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Link href="/" passHref legacyBehavior>
          <Nav.Link active={pathname === '/'}></Nav.Link>
        </Link>
        <NavDropdown 
          title="Product" 
          id="services-dropdown"
          active={pathname.startsWith('/product')}
        >
          {serviceCategories.product.map((item) => (
            <NavDropdown.Item key={item.href} onClick={() => router.push(item.href)}>
              {item.name}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
        <NavDropdown 
          title="Services" 
          id="services-dropdown"
          active={pathname.startsWith('/services')}
        >
          {serviceCategories.services.map((item) => (
            <NavDropdown.Item key={item.href} onClick={() => router.push(item.href)}>
              {item.name}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
        <NavDropdown 
          title="Trainings" 
          id="services-dropdown"
          active={pathname.startsWith('/Trainings')}
        >
          {serviceCategories.trainings.map((item) => (
            <NavDropdown.Item key={item.href} onClick={() => router.push(item.href)}>
              {item.name}
            </NavDropdown.Item>
          ))}
        </NavDropdown>

        <Link href="/Discover" passHref legacyBehavior>
          <Nav.Link active={pathname === '/Discover'}>Discover Avance</Nav.Link>
        </Link>
        <Link className="nav-link larger-about" href="/Get-free">
          <button
            type="button"
            className="btn1 mx-2"
            style={{
              borderRadius: '20px',
              backgroundColor: '#5da8f8',
              color: 'white',
              border: 'none',
              padding: '5px 15px',
              paddingLeft: '20px',
              fontSize: '16px',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#346ef6'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#5da8f8'}
          >
            Get Free Quotes
          </button>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}
