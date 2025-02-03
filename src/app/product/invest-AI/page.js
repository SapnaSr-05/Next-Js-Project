import React from 'react'
// import './Invest.css'; 
// import { Link } from 'react-router-dom';
import NavigationBar from '../../../components/Navbar'
function Invest() {
    return (
      <div>
        <NavigationBar/>
        <div className="Invest-container5">
       <h2 className="title4 mt-4">
        <span>Invest</span>
        
        <span className="italic-red">IT</span>
      </h2>
          <div className="content5">
            <div className="text5">
              {/* <h5 className='tex'>InvestAI Organization</h5> */}
              <p>
                Welcome to "InvestAI", the best way of successful trading study. InvestAI is a user friendly technical strategy base signalling platform.This software can help you in NSE Indian share market, future and option market trade. With this, you will know follow the market trend exactly when to Exact Entry buy and when to sell, what should be the target etc.<br/><br/>Even the stop loss value can be predicted by using our charts. Risk limited and profit unlimited . These are not just accurate, but also very easy to understand. With this, you’ll be able to trade in intraday trading Strategy, short term and long term trading portfolio.<br/>
                Software work on previous history forecast Fast decision making Can not Over confidence.
              </p>
            </div>
            <div className="image-container5">
            <img src="../Img/invest1.jpg" alt="" />
            </div>
          </div>
          
          <div className="content5">
            <div className="image-container5">
            <img src="../Img/risk1.jpg" alt="" />
            </div>
            <div className="text5">
              <h5 className='tex'>Risk-Smart Organization</h5>
              <p>
              A risk-smart organization is one that proactively identifies, assesses, and manages risks to make 
              informed decisions while minimizing potential negative impacts. It involves cultivating a culture where risk management is 
              embedded in all levels of the business, from strategic planning to day-to-day operations.<br/> <br/>These organizations leverage data, 
              advanced analytics, and scenario planning to anticipate challenges, mitigate potential threats, and capitalize on opportunities.
              Rather than avoiding risks altogether, a risk-smart organization embraces calculated risks that align with its goals and vision, 
              enabling innovation and growth while maintaining a strong resilience to unforeseen events.
              </p>
            </div>
            </div>
          {/* <Link to="/Invest"></Link> */}
        </div>
      
        </div>
      );
    }

export default Invest

