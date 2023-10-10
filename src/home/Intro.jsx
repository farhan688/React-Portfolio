import React from 'react';
import '../styles/style-intro.css';
import profil from '../image_profile/profil.png';
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-name'>
        <p className='text1'>Hello!</p>
        <p className='text2'>Its me, Farhan Aditya</p>
        <div className='text3'>
          I am a
          <span>
            <Typewriter
              words={[' student', ' fullstack developer', ' tech enthusiast']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </div>

        <p className='text4'>
          I am a dedicated and enthusiastic Computer Science student
          with a specialization in web development at the University of Lampung. I am deeply passionate about
          the ever-evolving world of technology, particularly in the eld of web development.
          {/* An informatics engineering student on university of Lampung. Familiar
          with front end development languages such as html, css, javascript,
          and many frameworks (bootstrap and react). Active in various
          competitions and organizations. Recently developed some website
          projects. Interested in continuing to develop front end development
          skills. Able to work in a team or individually. */}
        </p>
      </div>
      <div className='intro-image'>
        <div className='intro-image2'>
          <img src={profil} alt='foto' />
        </div>
      </div>
    </div>
  );
};

export default Intro;
