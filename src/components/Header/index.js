import React from 'react';
import './Header.css';
import linkedin from '../../images/linkedin.webp'
import github from '../../images/github.webp'
import docker from '../../images/docker.webp'
import thingiverse from '../../images/thingiverse.webp'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
        </ul>
      </nav>
      <nav className='contact'>
        <ul>
          <li>
            <a alt='LinkedIn' title='LinkedIn' href='https://www.linkedin.com/in/guireyes/' target='_blank'>
              <img src={linkedin} />
            </a>
          </li>
          <li>
            <a alt='GitHub' title='GitHub' href='https://github.com/guillermoreyesv' target='_blank'>
              <img src={github} />
            </a>
          </li>
          <li>
            <a alt='Docker' title='Docker' href='https://hub.docker.com/u/guillermoreyes' target='_blank'>
              <img src={docker} />
            </a>
          </li>
          <li>
            <a alt='Thingiverse' title='Thingiverse' href='https://www.thingiverse.com/memokunmx/designs' target='_blank'>
              <img src={thingiverse} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;