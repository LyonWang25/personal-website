import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a target='_blank' href="https://www.linkedin.com/in/li-yang-wang/"><FaLinkedin  /></a>
    </div>
    <div>
      <a target='_blank' href="https://www.linkedin.com/in/li-yang-wang/"><BsGithub  /></a>
    </div>
    <div>
    <a target='_blank' href="https://api.whatsapp.com/send/?phone=8572648922&text&type=phone_number&app_absent=0"><FaWhatsapp /></a>
    </div>
  </div>
);



export default SocialMedia;