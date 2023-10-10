import React from 'react';
import Intro from './Intro';
import ButtonDownload from '../resume/ButtonDownload';
import EducationList from '../resume/education/EducationList';
import OrganizationList from '../resume/organization/OrganizationList';
import Skills from '../resume/skills/Skills';
import Project from '../resume/project/Project';
import ExperienceList from '../resume/experience/ExperienceList';
import { getDataEd } from '../dataEd';
import { getDataOrg } from '../dataOrg';
import { getDataExp } from '../dataExp';

const Home = () => {
  const educations = getDataEd();
  const organizations = getDataOrg();
  const experiences = getDataExp();

  return (
    <div className='home'>
      <Intro />
      {/* <ButtonDownload />
      <div className='edu-org'>
        <EducationList educations={educations} />
        <div className='vertikal'></div>
        <OrganizationList organizations={organizations} />
      </div>
      <Skills data-aos='fade-up' />
      <Project />
      <ExperienceList experiences={experiences} /> */}
    </div>
  );
};

export default Home;
