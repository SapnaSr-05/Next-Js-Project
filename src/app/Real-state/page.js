import React from 'react'
import NavigationBar from '../../components/Navbar'
import {
    FcInspection,
    FcPositiveDynamic,
    FcMindMap,
  } from "react-icons/fc";
  import Link from 'next/link';  // Correct import for Link in Next.js

const page = () => {
  return (
    <div>
        <NavigationBar/>
      <div className="Rael-free-container">
      <h1>Platform</h1>
      <p>Choose the App type on which you want to build your Real-Estate App</p>
      <div className="Raelframes">
        {/* Frame 1 */}
        <Link href="/contact" className="Raelframe">
          <div className="Raelframe-content">
            <div className="Raelicon">
              <FcInspection size={70} /> {/* Use the mail icon */}
            </div>
            <p>Mail Services</p>
          </div>
        </Link>
        <Link href="/Webdevelopment" className="Raelframe">
          <div className="Raelframe-content">
            <div className="Raelicon">
              <FcMindMap size={70} /> {/* Use the desktop computer icon */}
            </div>
            <p>Web Development Services</p>
          </div>
        </Link>
        <Link href="/contact" className="Raelframe">
          <div className="Raelframe-content">
            <div className="Raelicon">
              <FcPositiveDynamic size={70} /> {/* Use the phone icon */}
            </div>
            <p>Phone Services</p>
          </div>
        </Link>
        {/* Add more frames as needed */}
      </div>

      {/* Button */}
      <div className="button-container">
        <button className="blue-button">Click Here</button>
      </div>
    </div>
    </div>
  )
}

export default page
