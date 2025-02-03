import React from 'react'
import NavigationBar from '../../../components/Navbar'

const page = () => {
  return (
    <div>
      <NavigationBar/>
      <div className="Custom-container5 bg-light">
      <h2 className="Custom-title5">Custom Software Development</h2>
      <div className="Custom-content5">
        <div className="Custom-text5">
          <p>Custom software development refers to the process of designing, creating, and deploying software that is specifically tailored to meet the needs of a particular user or business.<br/><br/>
            "As a software development company, we consistently strive for excellence, pushing the boundaries of 
            innovation and delivering exceptional solutions that set industry standards.
            flexible build processes to facilitate the effective management of business-critical systems.
          </p>
          <br/>
          <h3>We prioritize our approach for Web App Development:-</h3>
          <ul className="Custom-computer-list5">
            <li><span className="circle-icon"></span> Must Have:- Non-negotiable app features your app can't do without.</li>
            <li><span className="circle-icon"></span> Could Have:- Good-to-have features that will have minimal impact if left out.</li>
            </ul>
        </div>
        <div className="Custom-image-container5">
          <img src="../Img/blog-4.jpg" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
