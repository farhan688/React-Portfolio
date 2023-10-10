import React from 'react';
import '../../styles/style-skill.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
  return (
    <div className='div'>
      <h1>Hard Skills</h1>
      <div className='skills-wrapper'>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>HTML</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>CSS</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>JavaScript</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>PHP Laravel</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>Vue JS</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>React JS</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>VCS/GIT</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>PostgreSQL</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>Python</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>C++</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>GCP</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>Docker</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Skills;
