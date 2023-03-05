import React from 'react';
import frontend from '../img/frontend.png';
import ai from '../img/ai.png';
import tiktok from '../img/tiktok.png';
import ms from '../img/ms.png';
import tm from '../img/tm.png';
import coding from '../img/coding.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

export default function Skills () {
    const skills = [
        {title:'COMMUNICATION', img: tiktok, description:'Tiktok moderation, Commercial assistance, Clients service', style:{color: 'black', backgroundColor:'#BAD0E4'}, style1:{width: '70px'}, alt:'Communication'},
        {title:'THINKING AND SOLVING', img: ai, description:'AI, Algorithms, Analyse', style:{color: 'white', backgroundColor:'#3A53E3'}, style1:{width: '100px'}, alt:'Algorithms mindset'},
        {title:'WEB DEVELOPMENT', img: frontend, description:'HTML, CSS, JAVASCRPIT, REACT', style:{color: 'white', backgroundColor:'#29282B'}, style1:{width: '170px'}, alt: 'Frontend'},
        {title:'PROGRAMMING AND CODING', img: coding, description:'C, Java, Python(Beginner to intermediate)', style:{color: 'white', backgroundColor:'#29282B'}, style1:{width: '170px'}, alt:'Backend'},
        {title:'TIME MANAGMENT', img: tm, description:'Meeting deadlines', style:{color: 'white', backgroundColor:'#3A53E3'}, style1:{width: '200px'}, alt:'Meeting deadines'},
        {title:'MS OFFICE', img: ms, description:'Microsoft Office Tools', style:{color: 'black', backgroundColor:'#BAD0E4'}, style1:{width: '200px'}, alt:'Microsoft Office Tools'} 
    ]
    useEffect(()=>{
        AOS.init({duration: 2000});
    }, [])
    return (
        <div id='skills'>
        <h1 className='heading'>MY SKILLS</h1>
        <div id='myskills' >
            <ul>
                {skills.map((skill, index) => (
                <li key={index} id='skill' style={skill.style} data-aos="fade-up"> 
                    <p>{skill.title}</p>
                    <img style={skill.style1} src={skill.img} alt={skill.alt} />
                    <h3>{skill.description}</h3>
                </li>
                ))}
            </ul>
        </div></div>
    )
}