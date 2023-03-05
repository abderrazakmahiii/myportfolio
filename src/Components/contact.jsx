import React from 'react';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact () {
    useEffect(()=>{
        AOS.init({duration: 2000});
    }, [])
    return(
        <div id='contact' >
            <div id='contactmee' data-aos="fade-up">
            <div id='contact-text'>
                <h1>Let's bring your vision to life!</h1>
                <p>Need a skilled front end developer? I specialize in HTML, CSS, and JavaScript, and have experience with React.
                Let's build an intuitive and engaging user interface for your website or web app.</p>
                <button id='contactme'><a href='mailto:abderrazakmahiii@gmail.com'>Hire me</a></button>
            </div>
        </div>
        </div>
    )
}