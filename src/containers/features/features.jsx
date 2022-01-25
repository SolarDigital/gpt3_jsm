import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Futuristic Tech Solutions',
    text: 'In an alliance with us, you get a strategic technology partner that takes charge of bringing your vision to life. Your mobile and web application are built to be responsive, secure, scalable, maintainable, and flexible. We devise a technology framework that can withstand the onslaught of challenges in an ever-evolving industry and steadily grow your digital presence.'
  },
  {
    title: 'Highly-Engaged Workforce',
    text: 'When it’s about software designing, coding, testing, or maintenance, you can bank on us! With Simform’s Agile Development Model, you’re offered a transparent setting, where all teams engage from the inception of the project. This way, we stay on the same page throughout the development lifecycle. It also enables us to collectively refine the deliverables, improving the overall value of your product.'
  },
  {
    title: 'State-of-the-Art, Robust Software',
    text: 'Spark an instant connection with your users! Your application is backed with well-researched user behaviors. What’s more, before we move to the development phase, you get to demonstrate the look and feel of your app with clickable prototypes. Further, we distribute different sets of functionalities across multiple sprints, resulting in increased stakeholder engagement, higher quality, and faster delivery.'
  },
  {
    title: 'Dedicated Full-Stack Developers',
    text: 'We are trusted by some of Vancouver’s powerful enterprises and growing start-ups. Your ideas are nurtured by tech ninjas and design masters, who keep abreast of the latest trends in tech space. This multidisciplinary team collaborates with you to build intuitive, efficient, and robust software. From the word go, Solar stands by you in all walks of the development lifecycle.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Top-ranked software development company for Vancouver startups.</h1>
        <p>An expert team of engineers and developers that directly collaborates with your team to craft award-winning
           software solutions that complement your business.</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features;
