import React from 'react';
import about from '../img/about.jpg';
import home from '../img/home.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

export default function About() {
    useEffect(()=>{
        AOS.init({duration: 2000});
    }, [])

    return(
        <div id="about">
        <img src={about} alt='Art work' data-aos="zoom-in" />
        <div id='myabout' data-aos="zoom-in">
        <b>“</b>
        <hr/>
        <p>"As a front-end developer, I am driven by a passion for creating exceptional user experiences that engage and inspire. 
            With a deep understanding of design principles and a mastery of the latest front-end technologies, I bring a unique blend of
             creativity and technical expertise to every project I undertake.<br/>
             Collaboration is at the core of my approach, as I work closely with clients and stakeholders to fully understand their needs and
              exceed their expectations. I'm always dedicated to
               delivering intuitive and user-friendly interfaces that drive engagement. <br />
               So if you're looking for a skilled and experienced front-end developer who can bring your vision to life, let's work together 
               to create something truly remarkable.</p>
              <span id='small-pic'><img src={home} alt='Abderrazak Mahi'/>Abderrazak Mahi - Front End Developer</span>
        </div>
        </div>
    )
}