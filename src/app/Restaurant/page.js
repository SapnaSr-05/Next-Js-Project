import React from 'react'
import Link from 'next/link'
import { FcReadingEbook } from 'react-icons/fc';
import { FcSelfServiceKiosk } from 'react-icons/fc';
import { FcStatistics } from 'react-icons/fc';
import NavigationBar from '../../components/Navbar';
// import NavigationBar from '../../../components/Navbar'
const page = () => {
  return (
    <div>
        <NavigationBar/>
      <div className="Restaurant-free-container">
      <h1>Select Your Restaurant Platform</h1>
      <p>Choose what's more promising for your Restaurant sales and promotion!</p>
      <div className="Restaurantframes">
        {/* Frame 1 */}
        <Link href="/contact" className="Restaurantframe">
          <div className="Restaurantframe-content">
            <div className="Restauranticon">
              <FcReadingEbook size={70} /> {/* Use the mail icon */}
            </div>
            <p>Mail Services</p>
          </div>
        </Link>
        <Link href="/Webdevelopment" className="Restaurantframe">
          <div className="Restaurantframe-content">
            <div className="Restauranticon">
              <FcSelfServiceKiosk size={70} /> {/* Use the desktop computer icon */}
            </div>
            <p>Web Development Services</p>
          </div>
        </Link>
        <Link href="/contact" className="Restaurantframe">
          <div className="Restaurantframe-content">
            <div className="Restauranticon">
              <FcStatistics size={70} /> {/* Use the phone icon */}
            </div>
            <p>Phone Services</p>
          </div>
        </Link>
        {/* Add more frames as needed */}
      </div>

    </div>
    </div>
  )
}

export default page
