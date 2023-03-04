import {React, useState} from 'react';
import './Footer.css';

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const autor = 'Guillermo Reyes'
  return (
    <footer>
      <p>&copy; {currentYear} {autor}. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
