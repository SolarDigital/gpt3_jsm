import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility"> 
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Innovative Software Solutions</h4>
        <h1 className='gradient__text'>Empowering the Future of Technology</h1>
        <p>
        At Solar, we recognize our customers' existential need to use software to generate competitive advantage or, alpha. 
        We deliver the outcomes that matter to our customers by always aligning ourselves with their success, and 
        investing deeply to deliver it. This approach is at odds with commodity SaaS that has come to dominate the market. 
        The market incentivizes solutions that provide incremental efficiency at the lowest common denominator — but zero competitive advantage to the end customer.</p>
        <h4>Ensuring security and system resilience while accelerating innovation is a 
          business imperative.</h4>
      </div>
    </div>
    )
}

export default Possibility;