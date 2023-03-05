import React from 'react';
import './Body.css';
import avatar from '../../images/avatar.webp';
import Technologies from './technologies';

export default function Aboutme() {
    const initYear = 2018;
    const date = new Date();
    const currentYear = date.getFullYear();
    const expYears = currentYear - initYear
    return (
    <div className="flex-container">
        <div className="item-img">
            <img rel="preconnect" loading='lazy' className='avatar' alt='profile' src={avatar}/>
        </div>
        <div className="item">
        <h1>Guillermo Reyes</h1>
        <h2 className='button-especial'>Back-end Developer</h2>
        <div className='description'>
            <p>
            Prefiero ser breve asi que resumiendo tengo {expYears} años de experiencia en el desarrollo software y estas son algunas de las tecnologias que manejo: 
            </p>
        </div>
        <Technologies />
        </div>
    </div>
  );
  }
