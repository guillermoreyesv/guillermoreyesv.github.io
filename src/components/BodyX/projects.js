import React from 'react';
import './Body.css';
import ProjectTile from './ProjectTile';
import proyect_one from '../../images/proyects/IA-inchestocm.webp'
import searchComics from '../../images/proyects/searchComics.webp'
import managmentUser from '../../images/proyects/managmentUser.webp'
import layawayComic from '../../images/proyects/layawayComic.webp'
import comicList from '../../images/proyects/comicList.webp'

import personalFlix from '../../images/proyects/personalFlix.webp'
import cuantoBache from '../../images/proyects/cuantoBache.webp'
import loveRadar from '../../images/proyects/loveRadar.webp'
import portfolio from '../../images/proyects/portfolio.webp'

import keras from '../../images/keras.webp'
import tensorflow from '../../images/tensorflow.webp'
import docker from '../../images/docker.webp'
import github from '../../images/github.webp'
import python from '../../images/python.webp'
import php from '../../images/php.webp'
import laravel from '../../images/laravel.webp'
import bootstrap from '../../images/bootstrap.webp'
import flask from '../../images/flask.webp'
import mysql from '../../images/mysql.webp'
import mongodb from '../../images/mongodb.webp'
import js from '../../images/js.webp'
import react from '../../images/react.webp'

export default function Projects() {
  
  return (
    <div>
        <h2>Proyectos</h2>
        <p>
          Un poco sobre lo que he estado realizando en mis tiempos libres.
        </p>
        <div>
          <h3>Practicas:</h3>
          <div className="portfolio">
            <ProjectTile 
              src={proyect_one} 
              alt='consola pulgadas a cm' 
              title='1-Practica IA' 
              description='Conversion de pulgadas a centimetros usando IA con TensorFlow y keras.' 
              asrc='https://github.com/guillermoreyesv/firstIA'
              tecnologies={[python, tensorflow, keras, github]}/>
            <ProjectTile 
              src={searchComics} 
              alt='test' 
              title='1-Microservicio' 
              description='Busqueda de comics y/o personajes usando la API de Marvel.' 
              asrc='https://github.com/guillermoreyesv/Marvel-Search'
              tecnologies={[python, flask, docker, github]}/>
            <ProjectTile 
              src={managmentUser} 
              alt='test' 
              title='2-Microservicio' 
              description='Registro de usuarios, inicio de sesión (JWT) y recuperación de la información.' 
              asrc='https://github.com/guillermoreyesv/User-Management'
              tecnologies={[python, flask, mongodb, docker, github]}/>
            <ProjectTile 
              src={layawayComic} 
              alt='test' 
              title='3-Microservicio' 
              description='Gestión de comics reservados utilizando el primer microservicio y segundo microservicio.' 
              asrc='https://github.com/guillermoreyesv/Comic-Layaway'
              tecnologies={[python, flask, mongodb, docker, github]}/>
            <ProjectTile 
              src={comicList} 
              alt='test' 
              title='4-Microservicio' 
              description='Recuperación de comics reservados utilizando el primer y segundo micriservicio.' 
              asrc='https://github.com/guillermoreyesv/Comic-Reservation'
              tecnologies={[python, flask, docker, github]}/>
          </div>  
        </div>
        <div>
          <h3>Ideas:</h3>
          <div className="portfolio">
          <ProjectTile 
              src={portfolio} 
              alt='Portafolio' 
              title='Portafolio' 
              description='Esta pagina web' 
              asrc='https://github.com/guillermoreyesv/portfolio'
              tecnologies={[js, react, github]}/>
            <ProjectTile 
              src={loveRadar} 
              alt='consola pulgadas a cm' 
              title='LoveRadar' 
              description='Backend para aplicación Android (En curso)' 
              asrc='https://github.com/guillermoreyesv/LoveRadar'
              tecnologies={[python, flask, mongodb, docker, github]}/>
            <ProjectTile 
              src={cuantoBache} 
              alt='CuantoBache' 
              title='CuantoBache' 
              description='Sitio donde se permitirá registrar donde hay baches o accidentes en la CDMX (sin terminar).' 
              asrc='https://github.com/guillermoreyesv/CuantoBache'
              tecnologies={[php, laravel, bootstrap, mysql, github]}/>
            <ProjectTile 
              src={personalFlix} 
              alt='PersonalFlix' 
              title='PersonalFlix' 
              description='Servidor para subir archivos de video en una red local desde un movil (sin terminar).' 
              asrc='https://github.com/guillermoreyesv/PersonalFlix'
              tecnologies={[php, mysql, github]}/>
          </div>  
        </div>
    </div>
  );
}
