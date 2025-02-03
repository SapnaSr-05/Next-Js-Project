import React from 'react'
import Link from 'next/link'
import NavigationBar from '../../components/Navbar'

  import { FaDesktop } from 'react-icons/fa';  // Correct import for FaDesktop icon
  import { FaMobile } from 'react-icons/fa'; // Correct import for FaMobile
//   import { FcPhone } from 'react-icons/fc';
  import { FcPhoneAndroid } from 'react-icons/fc';

const page = () => {
  return (
    <div>
        <NavigationBar/>
       <div className="Blockchain-free-container">
      <h1>BlockChain</h1>
      <p>Which Blockchain Solution you require?</p>
      <div className="Raelframes">
        {/* Frame 1 */}
        <Link href="/contact" className="Raelframe">
          <div className="Raelframe-content">
            <div className="Raelicon">
              <FaDesktop size={70} /> {/* Use the mail icon */}
            </div>
            <p>Website</p>
          </div>
        </Link>
        <Link href="/Webdevelopment" className="Raelframe">
          <div className="Raelframe-content">
            <div className="Raelicon">
              <FaMobile size={70} /> {/* Use the desktop computer icon */}
            </div>
            <p>Mobile App</p>
          </div>
        </Link>
        <Link href="/contact" className="Raelframe">
          <div className="Raelframe-content">
            <div className="Raelicon">
              <FcPhoneAndroid size={70} />
            </div>
            <p>Both</p>
          </div>
        </Link>
        
      </div>
    </div>
    </div>
  )
}

export default page
