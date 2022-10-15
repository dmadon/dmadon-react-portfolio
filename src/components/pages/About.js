import React from 'react';
import headshot from '../../assets/Deanna_headshot.jpg';
import {motion} from 'framer-motion';

function About(){

    return (

    <motion.section 
      className="about-me container d-flex flex-column"
      id="about-me"
      initial={{opacity:.1}}
      animate={{opacity: 1}}
      transition={{duration: 2}}
      >

      <img id="headshot" className="mt-3" src={headshot} alt="Deanna Madon closeup, smiling" />
      <article>
        <h2 className="section-title text-center py-3">About Me</h2>
        <p >After working the last fifteen years as an office manager, I decided to take on a new challenge by making a career change and entering the software development world. I am currently working toward a professional certification in computer coding through SMU’s Coding Bootcamp. 
        I have a bachelor's degree in music from Texas Woman's University and twenty-four years of work experience in a variety of different roles. In that time, I have learned the importance of collaboration and developed excellent professional communication skills. My most fulfilling projects have been the ones which have allowed me to problem solve and make processes run more efficiently.</p>
        <h3>My Core Beliefs</h3>
          <ul className="list">
            <li>I believe that a commitment to lifelong learning leads to continuous improvement in every endeavor.</li>
            <li>I believe organizations thrive when members at all levels are heard.</li>
            <li>I believe trust is built on honesty and transparency.</li>
            <li>I believe collaboration among diverse perspectives and experiences encourages innovation.</li>
            <li>I believe the Golden Rule is as relevant today as it was when it was written:</li>
              <ul className="sub-list">
                <li>“Do to others as you would have them do to you.” Luke 6:31 (NIV)</li>
              </ul>
          </ul>
      </article>

    </motion.section>
    )

}

export default About;