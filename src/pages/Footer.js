import React from 'react';

import { GithubOutlined, LinkedinOutlined, TwitterCircleFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    
    <div>
       <footer>
            <div className='footer'> 
              
            <a style={{marginLeft: 0}} href="http://github.com/kunalc156"><GithubOutlined /> </a> 
            <a  style={{marginLeft: 0}}href="http://www.linkedin.com/in/kunal-choudhary-3956a363/"><LinkedinOutlined /></a>
            <a  style={{marginLeft: 0}} href="./assets/files/resume.pdf"><TwitterCircleFilled /></a> 
            <p>&#xa9;
              by Kunal Choudhary</p>
            </div>
        </footer>
     
    </div>
  );
};

export default Footer;