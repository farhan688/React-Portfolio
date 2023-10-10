import React from 'react';
import '../../styles/style-skill.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
  return (
    <div className='div'>
      <h1>Soft Skill</h1>
      <div className='skills-wrapper'>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>Communication skills</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>Problem-solving skills</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>Critical thinking</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>Teamwork skills</h4>
            {/* <small className='text-light'>Experienced</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4>Adaptability</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
        <article className='skills-detail'>
          <BsFillPatchCheckFill className='icon-check' />
          <div className='skills-detail__wrapper'>
            <h4> Time management</h4>
            {/* <small className='text-light'>Intermediate</small> */}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Skills;
