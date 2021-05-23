/** @format */

import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import logo from '../../../assets/logo.png';

const About = ({ changeShow, changeProgress }) => {
  const names = [
    'Mubin Ansari',
    'Athul Tulasidasan',
    'Jatin Chaudhari ',
    'Sarang Kottummal',
  ];
  const githubLinks = [
    'https://github.com/shiroyasha9',
    'https://github.com/Athul0491',
    'https://github.com/TheTornSkull',
    'https://github.com/sarang',
  ];
  const linkedInLinks = [
    'https://www.linkedin.com/in/mubinansari9/',
    'https://www.linkedin.com/in/jatin-chaudhari-696015195/',
    'https://www.linkedin.com/in/athul-thulasidasan-48745a1a8/',
    'https://www.linkedin.com/in/sarang-kottummal-06340a1b0/',
  ];

  return (
    <div className='about-page'>
      <div>
        {/* <div className='about-logo '>
          <img src={logo} alt='gifthub-logo' />
        </div> */}

        <h2 className='title-text'>
          Made with {<FaHeart className='heart-icon' />} by
        </h2>
        <div className='about-card'>
          {names.map((name, index) => {
            return (
              <div className='about-cards' key={index}>
                <p className='gifthub-text'> {name}</p>
                <a href={githubLinks[index]} target='_blank' rel='noreferrer'>
                  <AiFillGithub size='4.4vh' className='about-icon' />
                </a>
                <a href={linkedInLinks[index]} target='_blank' rel='noreferrer'>
                  <AiFillLinkedin size='4.4vh' className='about-icon' />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
