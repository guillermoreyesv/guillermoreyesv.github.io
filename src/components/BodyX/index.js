import React from 'react';
import './Body.css';
import Projects from './projects';
import Aboutme from './aboutme';

function Body() {

  return (
    <main>
      <section id="sobre-mi">
        <Aboutme />
      </section>
      <section id="proyectos">
        <Projects />
      </section>
    </main>
  );
}

export default Body;
