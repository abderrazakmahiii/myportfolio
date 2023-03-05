import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { menu } from './navbar';
import { toggleNavigate } from './navbar';
import home from '../img/home.jpg';

export default function Sidebar() {
    return (
        <div id='side-bar'>
            <IoIosClose id='hide-side-menu'  onClick={toggleNavigate} />
            <div id='profil'>
                <img src={home} alt='Abderrazak Mahi' />
                <h3>Abderrazak Mahi</h3>
                <p>Front-end developer</p>
            </div>
            <h5>MENU</h5>
            <hr />
            <ul id='side-menu'>
                {menu.map((list, index) => (
                <li key={index}>
                <a href={list.link} onClick={toggleNavigate}><i className={list.icon}></i>{list.name}</a>
                </li>
                ))}
            </ul>
            <div id='bottom'>
                <button><a href='mailto:abderrazakmahiii@gmail.com'>Let's chat</a></button>
            </div>
        </div>
    );
}