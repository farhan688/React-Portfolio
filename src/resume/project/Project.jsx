import React from 'react';
import '../../styles/style-project.css';
import { motion } from 'framer-motion';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoPhp, IoLogoGithub, IoLogoNodejs  } from 'react-icons/io';
import { RiReactjsFill, RiVuejsFill } from 'react-icons/ri';

const Project = () => {
  return (
    <div className='project'>
      <div className='responsive-title'>
        <h1>PROJECT</h1>
      </div>
      <div className='w-left'>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className='w-mainCircle'
        >
          <div className='w-secCircle'>
            <IoLogoHtml5 className='icons' />
          </div>
          <div className='w-secCircle'>
            <IoLogoCss3 className='icons' />
          </div>
          <div className='w-secCircle'>
            <h1>PROJECT</h1>
          </div>
          <div className='w-secCircle'>
            <IoLogoJavascript className='icons' />
          </div>
          <div className='w-secCircle'>
            <IoLogoGithub className='icons' />
          </div>
        </motion.div>
      </div>
      <div className='project-detail'>
        <div className='project-detail__body'>
          <h2>SurveyAsia</h2>
          <p>
            Web application for creating surveys and polls.
          </p>
          <a href='https://alpha.surveyasia.id/'>
            <button className='button-project'>SHOW</button>
          </a>
        </div>
        <div className='project-detail__body'>
          <h2>Movie Search</h2>
          <p>
            Website for searching movies using TMDb API.
          </p>
          <a href='https://farhan688.github.io/movieapp/'>
            <button className='button-project'>SHOW</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
