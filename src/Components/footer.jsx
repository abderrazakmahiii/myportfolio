import React from 'react';
import { menu } from './navbar';
import { social } from './home';

export default function Footer () {
    return (
        <div id="footer">
            <div id='left'>
                <a id='logo' href={menu[0].link}>Abderrazak Mahi</a>
                <ul id='nav-menu'>
                    {menu.map((list, index) => (
                        <li key={index}>
                            <a href={list.link}>{list.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div id='right'>
                <ul id='social'>
                    {social.map((media, index) => 
                        (<li key={index} ><a href={media.link} target='_blank' rel="noopener noreferrer"><i className={media.icon}></i></a></li>)
                    )}
                </ul>
                <p>Copyright © {new Date().getFullYear()}</p>
                <p>Version 1.2.0</p>
            </div>
    </div>
    )
}