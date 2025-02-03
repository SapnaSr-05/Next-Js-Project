import React from 'react'
import Link from 'next/link'
import NavigationBar from '../../components/Navbar'
const page = () => {
  return (
    <div>
        <NavigationBar/>
      <div className="Mob-free-container">
      <h1>Select the type of App you want to Build</h1>
      <p className='graph'>Let's get started with how much to make an app from scratch. Listed in Inc. 5000 fastest growing companies <br />
         thus major brands trust our custom mobile app development services.</p>
      <div className="Mobframes">
        {/* Frame 1 */}
        <Link href="/contact" className="Mobframe" style={{ backgroundImage: `url('../Img/A1.png')` }}>
          <div className="Mobframe-content">
            <div className="content-overlay">
              <h2></h2> {/* Replace with your title */}
              <p></p> {/* Replace with your description */}
            </div>
          </div>
        </Link>
        <Link href="/Webdevelopment" className="Mobframe" style={{ backgroundImage: `url('../Img/A2.png')` }}>
          <div className="Mobframe-content">
            <div className="content-overlay">
              <h2></h2> {/* Replace with your title */}
              <p></p> {/* Replace with your description */}
            </div>
          </div>
        </Link>
        {/* Add more frames as needed */}
      </div>
    </div>
    </div>
  )
}

export default page
