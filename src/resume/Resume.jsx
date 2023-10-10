import React from 'react';
import ButtonDownload from '../resume/ButtonDownload';
import EducationList from '../resume/education/EducationList';
import OrganizationList from '../resume/organization/OrganizationList';
import Skills from '../resume/skills/Skills';
import SoftSkills from '../resume/skills/SoftSkills';
import Project from '../resume/project/Project';
import ExperienceList from '../resume/experience/ExperienceList';
import '../styles/style-resume.css';
import { getDataEd } from '../dataEd';
import { getDataOrg } from '../dataOrg';
import { getDataExp } from '../dataExp';

const Home = () => {
  const educations = getDataEd();
  const organizations = getDataOrg();
  const experiences = getDataExp();

  return (
    <div className='resume'>
      <p className='text1'>RESUME</p>
      <ButtonDownload />
      <div className='edu-org'>
        <EducationList educations={educations} />
        <div className='vertikal'></div>
        <OrganizationList organizations={organizations} />
      </div>
      <ExperienceList experiences={experiences} />
      <div className='skills-container'>
        <div className='skills-item'>
          <Skills data-aos='fade-up' />
        </div>
        <div className='vertikal'></div>
        <div className='skills-item'>
          <SoftSkills data-aos='fade-up' />
        </div>
      </div>
      {/* <Project /> */}
    </div>
  );
};

export default Home;
