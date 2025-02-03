import React from 'react';
import NavigationBar from '../../../components/Navbar'
function AvanceTest() {
  return (
    <div>
      <NavigationBar/>
    <div className="AvanceTest-container6">
      <h2 className="title4 mt-4">
        <span>Avance</span>
        <span className="italic-red">Test</span>
      </h2>
      <div className="AvanceTest-content6">
        <div className="AvanceTest-text6">
          <p>If you’re referring to "Avance Test" in a software development or testing context, it might be part of a specific framework or toolset you are using.
            It is a rigorous hands-on program designed to develop competencies in lasted technologies for future-oriented technology ready academic institutions, corporates & retails.
          </p>
          <h3 className='data'>AvanceTest Modules:-</h3>
          <ul className="AvanceTest-computer-list6">
            <li>Students & Teachers (MockTest, Practice Test, Final assessment etc.)</li>
            <li>Revenue sharing model for Independent Content providers</li>
            <li>Online Answer Sheet checking Process</li>
            <li>Examine Employee, hiring candidates, Integrity & Other Assessments</li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className="AvanceTest-image-container6">
          <img src="../Img/test.jpg"alt="" />
        </div>
      </div>
      <br/>
      <h5 className='tt'>Data-Driven Business Strategy </h5>
      <br/>
      <div className="Networkin-container">
        
        <div className="Networkin-item">
          {/* <FontAwesomeIcon icon={faDatabase} size="1x" className='icons1'/> */}
          <h2>Data Collection</h2>
          <p>The data-driven strategy is robust data collection. Businesses gather data from various sources such as customer interactions, sales transactions and internal operations.</p>
          <a href="#readmore1" className="read-more">Read More</a>
          <div id="readmore1" className="more-info"></div>
        </div>
        <div className="Networkin-item">
          {/* <FontAwesomeIcon icon={faInvision} size="1x" className='icons1' /> */}
          <h2>Innovation and Competitive</h2>
          <p>Data-driven businesses can innovate faster and stay ahead of competitors by identifying market trends early and responding more quickly to changes.</p>
          <a href="#readmore2" className="read-more">Read More</a>
          <div id="readmore2" className="more-info"></div>
        </div>
        <div className="Networkin-item">
          {/* <FontAwesomeIcon icon={faThinkPeaks} size="1x" className='icons1'/> */}
          <h2>Informed Decision Making</h2>
          <p>With actionable insights derived from the data, companies can make more informed decisions. For example, businesses can optimize marketing campaigns.</p>
          <a href="#readmore3" className="read-more">Read More</a>
          <div id="readmore3" className="more-info"></div>
        </div>
      </div>
      <br/>
      <h5 className='tt'>Data Analysis Strategy </h5>
      <div className="AvanceTest-content6">
      <div className="AvanceTest-image-container6">
          <img src="../Img/test1.jpg" alt="" />
        </div>
        <div className="AvanceTest-text6">
          {/* <h5 className='data'>Data Analysis:-</h5> */}
          <p>
          Once data is collected, it needs to be analyzed to uncover patterns, trends, and insights.This is often done using business intelligence (BI) tools, machine learning algorithms,
           and statistical analysis techniques
          </p>
          <h3 className='data'>Data Analysis Modules:-</h3>
          <ul className="AvanceTest-computer-list6">
            <li>Students & Teachers (MockTest, Practice Test, Final assessment etc.)</li>
            <li>Revenue sharing model for Independent Content providers</li>
            <li>Online Answer Sheet checking Process</li>
            <li>Creating static, animated, and interactive visualization.</li>
            <li>Examine Employee, hiring candidates, Integrity & Other Assessments</li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default AvanceTest;
