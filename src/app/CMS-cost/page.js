import React from 'react'
import Link from 'next/link'
import NavigationBar from '../../components/Navbar'
import { FcAddressBook } from 'react-icons/fc';
import { FcMultipleSmartphones } from 'react-icons/fc';
import { FcPhone } from 'react-icons/fc';
import { FcComments } from 'react-icons/fc';
import { FcCalculator } from 'react-icons/fc';
import { FcClapperboard } from 'react-icons/fc';
import { FcElectronics } from 'react-icons/fc'; 
import { FcGraduationCap } from 'react-icons/fc'; // Correct import
import { FcExport } from 'react-icons/fc'; // Correct import for the export icon

import { FcBusinessman } from 'react-icons/fc';
const page = () => {
  return (
    <div>
        <NavigationBar/>
      <div className="CMS-free-container">
      <h1>Best Solution</h1>
      <p>
      Pick up the best among the available CMS options that will <br />
       be suitablefor enhancing your website.
      </p>
      <div className="CMSframes">
        {/* Frame 1 */}
        <Link href="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              < FcAddressBook size={80} /> {/* Use the mail icon */}
            </div>
            <p>Mail Services</p>
          </div>
        </Link>
        <Link href="/Webdevelopment" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcMultipleSmartphones size={80} /> {/* Use the mail icon */}
            </div>
            <p>Web Development Services</p>
          </div>
        </Link>
        <Link href="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcPhone size={80} /> {/* Use the mail icon */}
            </div>
            <p>Phone Services</p>
          </div>
        </Link>
        <Link href="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcComments  size={80} /> {/* Use the mail icon */}
            </div>
            <p>Chat Services</p>
          </div>
        </Link>
        <Link href="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcCalculator size={80} /> {/* Use the mail icon */}
            </div>
            <p>Calculator Services</p>
          </div>
        </Link>
        <Link href="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcClapperboard size={80} /> {/* Use the mail icon */}
            </div>
            <p>A Photograph Services</p>
          </div>
        </Link>
        <Link href="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcElectronics  size={80} /> 
            </div>
            <p> ChartLine Services</p>
          </div>
        </Link>
        
        <Link href="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcBusinessman size={80} /> {/* Use the mail icon */}
            </div>
            <p>Shopping-Bag Services</p>
          </div>
        </Link>
        <Link href="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcGraduationCap size={80} /> {/* Use the mail icon */}
            </div>
            <p>Academic-Cap Services</p>
          </div>
        </Link>
        <Link href="/contact" className="CMSframe">
          <div className="CMSframe-content">
            <div className="CMSicon">
              <FcExport size={80} /> 
            </div>
            <p>Academic-Cap Services</p>
          </div>
        </Link>
        {/* Repeat for Frame 2 to 8 */}
        {/* ... */}
      </div>
    </div>
    </div>
  )
}

export default page
