import React from 'react';
import Home from './home/Home';
import Resume from './resume/Resume';
import Project from './resume/project/Project';
import SertifikatList from './sertifikat/SertifikatList';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';
import { getData } from './data';
import { Routes, Route } from 'react-router-dom';
import '../src/styles/style.css';

const PortoApp = () => {
  const sertifikats = getData();

  return (
    <>
      <div className='main-page'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/project' element={<Project />} />
          <Route
            path='/certificate'
            element={<SertifikatList sertifikats={sertifikats} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default PortoApp;
