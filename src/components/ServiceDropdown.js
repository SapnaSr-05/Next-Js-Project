'use client';
import { NavDropdown } from 'react-bootstrap';

const services = [
  { name: 'Cleaning Services', description: 'Professional cleaning solutions' },
  { name: 'Plumbing', description: 'Expert plumbing services' },
  { name: 'Electrical Work', description: 'Licensed electrical services' },
  { name: 'Home Repair', description: 'General home maintenance and repair' },
];

export default function ServiceDropdown() {
  return (
    <NavDropdown title="Services" id="basic-nav-dropdown">
      {services.map((service) => (
        <NavDropdown.Item key={service.name} href="#">
          <div>
            <div className="fw-bold">{service.name}</div>
            <div className="text small">{service.description}</div>
          </div>
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}
