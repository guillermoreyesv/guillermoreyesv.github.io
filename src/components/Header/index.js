import React from 'react';
import './Header.css';
import linkedin from '../../images/linkedin.webp'
import github from '../../images/github.webp'
import docker from '../../images/docker.webp'
import thingiverse from '../../images/thingiverse.webp'

export default function Header() {
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
            <a rel="noreferrer" href='https://www.linkedin.com/in/guireyes/' target='_blank'>
              <img alt='LinkedIn' title='LinkedIn' src={linkedin} />
            </a>
          </li>
          <li>
            <a rel="noreferrer" href='https://github.com/guillermoreyesv' target='_blank'>
              <img alt='GitHub' title='GitHub' src={github} />
            </a>
          </li>
          <li>
            <a rel="noreferrer" href='https://hub.docker.com/u/guillermoreyes' target='_blank'>
              <img alt='Docker' title='Docker' src={docker} />
            </a>
          </li>
          <li>
            <a rel="noreferrer" href='https://www.thingiverse.com/memokunmx/designs' target='_blank'>
              <img alt='Thingiverse' title='Thingiverse' src={thingiverse} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}