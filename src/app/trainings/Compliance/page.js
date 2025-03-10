import React from 'react'
import NavigationBar from '../../../components/Navbar'
const page = () => {
  return (
    <div>
      <NavigationBar/>
      <div className="Compliance-container5">
          <h2 className="Compliance-title5">Compliance at Workplace</h2>
          <div className="Compliance-content5">
            <div className="Compliance-text5">
              <p>To articulate and develop an elearning module (online & offline modules) of 60 minutes to cover knowledge series on anti-corruption for individuals and corporates. The aim is to develop quality content which is scalable in nature, user friendly and can be uniformly propagated to end users through online medium.<br/>
                  <br/>
              This will cover a model for good governance, integrity and ethical practices. Each module will last for 10 to 12 minutes and knowledge sharing will be done via conversational audio visuals. The following modules will be covered as below:.<br/>
              </p>
              <br/>
              <h3>Description Modules:-</h3>
              <ul className="Compliance-computer-list5">
                <li><span className="circle-icon"></span> Application Management & Assessor Dashboard</li>
                <li><span className="circle-icon"></span> Proctor’s Dashboard & Admin Dashboard.</li>
                <li><span className="circle-icon"></span> Reporting Dashboard.</li>
                {/* Add more list items as needed */}
              </ul>
            </div>
            <div className="Compliance-image-container5">
            <img src="../Img/w1.jpg" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default page
