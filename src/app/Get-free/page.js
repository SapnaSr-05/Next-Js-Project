import React from 'react'
import { FcAndroidOs } from 'react-icons/fc';
import { FcMultipleDevices } from 'react-icons/fc';
import { FcKindle } from 'react-icons/fc';
import { FcDepartment } from 'react-icons/fc';
import { FcCalculator } from 'react-icons/fc';
import { FcFaq } from 'react-icons/fc';
import { FcShipped } from 'react-icons/fc';
import { FcGraduationCap } from 'react-icons/fc';

import Link from 'next/link'
import NavigationBar from '../../components/Navbar';
const page = () => {
  return (
    <main>
        <NavigationBar/>
    <div>
      {/* <NavigationBar/> */}
    <div className="Container-fluid ">
      <h1>Get an Estimate of your Project</h1>
      <p>If you have an idea, it’s time to turn it into a reality & find the estimated cost</p>
      <h2>What type of project do you need?</h2>
      </div>
      
     
      {/* <div className="container"> */}
        <div className="row">
          {/* Frame 1 */}
          <div className="col-sm-3 Getframe1">
            <Link href="/Andriodapp">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcAndroidOs size={50} />
                </div>
                <p>How much to<br />make an App</p>
              </div>
            </Link>
          </div>

          {/* Frame 2 */}
          <div className="col-sm-3 Getframe1">
            <Link href="/web-devlop">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcMultipleDevices size={50} />
                </div>
                <p>Web Development<br/>Services</p>
              </div>
            </Link>
          </div>

          {/* Frame 3 */}
          <div className="col-sm-3 Getframe1">
            <Link href="/CMS-cost">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcKindle size={50} />
                </div>
                <p>How Much a <br /> CMS Cost</p>
              </div>
            </Link>
          </div>

          {/* Frame 4 */}
          <div className="col-sm-3 Getframe1">
            <Link href="/Real-state">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcDepartment size={50} />
                </div>
                <p>How Much To Make<br />Real-State App</p>
              </div>
            </Link>
          </div>

          {/* Frame 5 */}
          <div className="col-sm-3 Getframe1">
            <Link href="/Blockchain">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcCalculator size={50} />
                </div>
                <p>Calculate Blockchain <br />Based App Cost</p>
              </div>
            </Link>
          </div>

          {/* Frame 6 */}
          <div className="col-sm-3 Getframe1">
            <Link href="/chatbot">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcFaq size={50} />
                </div>
                <p>How much a <br /> Chatbot Project Cost?</p>
              </div>
            </Link>
          </div>

          {/* Frame 7 */}

          {/* Frame 8 */}
          <div className="col-sm-3 Getframe1">
            <Link href="/Restaurant">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcShipped size={50} />
                </div>
                <p>Calculate Restaurant <br /> Solution Cost </p>
              </div>
            </Link>
          </div>

          {/* Frame 9 */}
          <div className="col-sm-3 Getframe1">
            <Link href="/testingprojects">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcGraduationCap size={50} />
                </div>
                <p>Academic-Cap  <br /> Services</p>
              </div>
            </Link>
          </div>
        </div>
      {/* </div> */}
<br/>
      <p className='justify text-center'>
        Whether you need a mobile app, web app, CMS, or a Restaurant Solution, we have everything you need in one place! Choose the desired option to deploy
        your app and the features you need to include in your app to scale your business to newer heights.
      </p>
      <div className="Analytics-wrapper">
      <div className="Analytics-container">
        <div className="Analytics-left">
          <h2>How Mature Is Your Organization's
            <br />Analytics Program?</h2>
          <p>Not even a single organization evolves through these maturity <br />
              phases at the same rate in a single way!</p>
        </div>
        <div className="Analytics-right">
          <h2>Where does your enterprise
           <br />stand into this picture?</h2>
          <button>Calculate Analytics Maturity Score</button>
        </div>
      </div>
    </div>
    
    </div>
    </main>
    
  )
}

export default page
