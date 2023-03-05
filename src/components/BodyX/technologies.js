import React from 'react';
import './Body.css';
import python from '../../images/python.webp';
import postgres from '../../images/postgres.webp';
import php from '../../images/php.webp';
import mysql from '../../images/mysql.webp';
import mongodb from '../../images/mongodb.webp';
import js from '../../images/js.webp';
import docker from '../../images/docker.webp';
import github from '../../images/github.webp';

export default function Technologies() {
  
  return (
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
  );
  }
