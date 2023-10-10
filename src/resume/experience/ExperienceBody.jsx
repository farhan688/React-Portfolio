import React from 'react';
import '../../styles/style-experience.css';

const ExperienceBody = ({ icon, nama, perusahaan, time, lokasi, description }) => {
  return (
    <div>
      <div className='card'>
        <div className='imgBox'>
          <div className='icon'>{icon}</div>
          <h2 className='judul1'>{nama}</h2>
        </div>
        <div className='content'>
          <div className='teks'>
            <div className='education-item__program'>{perusahaan}</div>
            <div className='education-item__date'>{time}</div>
            <div className='education-item__grade'>{lokasi}</div>
          </div>
        </div>
      </div>
      {/* <div className="content"></div>
        <div className='education-item__desc'>{description}
      </div> */}
    </div>
  );
};

export default ExperienceBody;
