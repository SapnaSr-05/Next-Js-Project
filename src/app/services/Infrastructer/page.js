import React from 'react'
import NavigationBar from '../../../components/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
// import { faDesktop } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
// import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import the faGlobe icon
// import { faServer } from '@fortawesome/free-solid-svg-icons'; 
const page = () => {
  return (
    <div>
      <NavigationBar/>
      <div className="containerIT ">
      <div className="background-image1">
        <div className="content1">
          <h1>IT Infrastructure</h1>
         </div>
      </div>
    </div>
      <div className="container2">
      <div className="title2">
        <h1>Hardware</h1>
        <p>
        Hardware refers to the physical components that make up a computer or electronic device. 
        These are the parts you can touch and see, in contrast to software, which consists of the programs and 
        instructions that run on the hardware.
       It's the physical infrastructure that software works on to enable a computer to perform 
        functions like input, output, storage, communication, and processing.
        </p>
      </div>
      <div className="hardware-info2">
        <div className="left-paragraph2">
          <p>
          Hardware is different from software, which is the programs that run on a computer. 
          Software is the intangible part of the device that lets the user interact with the hardware and command it to 
          perform specific tasks. 
          </p>
          <div className="computers-list">
        <ul>
          <li>The CPU is essential for executing programs and running the operating system.</li>
          <li>Devices that are connected to the computer externally, like printers, scanners, external hard drives, and USB devices.</li>
          <li>The more RAM a system has, the more data and programs it can handle at once.</li>
          <li>Components located inside the computer case, such as the CPU, RAM, storage devices, and motherboard.</li>
          <li>Includes fans, heat sinks, or liquid cooling systems to keep hardware components, especially the CPU and GPU, from overheating.</li>
          <li>Devices that display or produce data for the user.</li>
          <li>Handles rendering images, video, and animations.</li>
      </ul>
        </div>
        </div>
        <div className="right-image2">
          <img src="../Img/hz.jpg" alt=""  />
        </div>
      </div>
    </div>
    <div>
      <div className='Networking'>
        <h1 className='Networking-h1'>Active Passive Networking</h1>
        <p className="networkings-paragraph">
        Active-Passive Networking refers to a configuration where two or more network devices, 
        links, or systems are set up in such a way that one is actively handling traffic while the 
        other is in a passive or standby state. This setup is typically used to ensure high availability,
         redundancy, and failover protection for critical network infrastructure.
         If the active component fails, the passive component quickly takes over to maintain the continuity of services.
        </p>
      </div>
      <div className="Networking-container">
        <div className="Networking-item">
          {/* <FontAwesomeIcon icon={faDesktop} size="3x" className='icons1'/> */}
          <h2>Our portfolio</h2>
          <p>We specialize in creating and optimizing high-quality, custom webportal & Mobile App for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use interface for clients.</p>
          <a href="#readmore1" className="read-more">Read More</a>
          <div id="readmore1" className="more-info"></div>
        </div>
        <div className="Networking-item">
          {/* <FontAwesomeIcon icon={faGlobe} size="3x" className='icons1' /> */}
          <h2>Passive Networking Solutions</h2>
          <p>We are the premier Information Technologies provider, delivering cutting-edge solutions that redefine industry standards.</p>
          <a href="#readmore2" className="read-more">Read More</a>
          <div id="readmore2" className="more-info"></div>
        </div>
        <div className="Networking-item">
          {/* <FontAwesomeIcon icon={faServer} size="3x" className='icons1'/> */}
          <h2>Active Network</h2>
          <p>Experience the expertise of our top-tier project management trainers, dedicated to educating both aspiring candidates and corporate professionals.</p>
          <a href="#readmore3" className="read-more">Read More</a>
          <div id="readmore3" className="more-info"></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
