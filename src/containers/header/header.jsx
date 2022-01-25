import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return ( 
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Let's build something amazing with Solar Digital.</h1>
        <p>We build software that empowers organizations to effectively integrate their data, decisions, and operations.</p> 
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'></input>
          <button type="button">Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt-="people" />
          <p>Disrupting and Revolutizing Technology</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
    )
}

export default Header;
