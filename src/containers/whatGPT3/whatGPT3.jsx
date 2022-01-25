import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return ( 
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is Solar Digital" text="Bring intelligence to your entire enterprise, and to the core of the 
        decisons and operations that matter most. Performant software is no longer a luxury for the institutions of tomorrow. 
        The dominant nation-states and companies that define our way of life will be the ones that get software and use of data right. 
        Getting this right is a requirement to preserve our way of life and enable society to thrive beyond a few dominant organizations." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>Achieve more with Solar Digital.</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title='Day 1 Value' text='Our platforms deliver value out of the box. Days, not years. Our operating systems serve Modern Enterpise, Global Decision Making,
        and Continuous Delivery. Quickly implementing solutions to the hardest problems they face.' />
        <Feature title='Full Stack Interoperability' text='Solar meets you where you are, automatically 
        connecting with and enhancing your existing data systems.' />
        <Feature title='Multi-Layered Security and Data Privacy' text='Our approach to security enables collaboration instead of 
        inhibiting it. Our platforms use secure and accountable infrastructure to maximize the utility of their data.'/>
      </div>
    </div>
  )
}

export default WhatGPT3;
