import React from 'react';
import './Body.css';
import avatar from '../../images/avatar.webp';
import python from '../../images/python.webp';
import postgres from '../../images/postgres.webp';
import php from '../../images/php.webp';
import mysql from '../../images/mysql.webp';
import mongodb from '../../images/mongodb.webp';
import js from '../../images/js.webp';
import docker from '../../images/docker.webp';
import github from '../../images/github.webp';

function Body() {
  const initYear = 2018;
  const date = new Date();
  const currentYear = date.getFullYear();
  const expYears = currentYear - initYear

  return (
    <main>
      <section id="sobre-mi">
        <div className="flex-container">
          <div className="item-img">
            <img rel="prefetch" className='avatar' src={avatar}/>
          </div>
          <div className="item">
            <h1>Guillermo Reyes</h1>
            <h2 className='button-especial'>Back-end Developer</h2>
            <div className='description'>
              <p>
              Prefiero ser breve asi que resumiendo tengo {expYears} años de experiencia en el desarrollo software y estas son algunas de las tecnologias que manejo: 
              </p>
            </div>
            <div className='img-technologies'>
              <img title='python' alt='python' src={python}/>
              <img title='php' alt='php' src={php}/>
              <img title='js' alt='js' src={js}/>
              <img title='postgres' alt='postgres' src={postgres}/>
              <img title='mysql' alt='mysql' src={mysql}/>
              <img title='mongodb' alt='mongodb' src={mongodb}/>
              <img title='docker' alt='docker' src={docker}/>
              <img title='github' alt='github' src={github}/>
            </div>
          </div>
        </div>
      </section>
      <section id="proyectos">
        <h2>Proyectos</h2>
        <p></p>
        <ul>
          <li><a href="#">Proyecto 1</a></li>
          <li><a href="#">Proyecto 2</a></li>
          <li><a href="#">Proyecto 3</a></li>
        </ul>
      </section>
      <section id="contacto">
        <h2>Contacto</h2>
        <p>Si deseas ponerte en contacto conmigo, puedes hacerlo a través de los siguientes medios:</p>
        <ul>
          <li><a href="#">Correo electrónico</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </section>
    </main>
  );
}

export default Body;
