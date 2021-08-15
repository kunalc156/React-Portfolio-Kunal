import React from 'react';
import { GithubOutlined } from '@ant-design/icons';

const Project = ( props ) => {

    return (
        <div className='portfolio_box'>  
        {
            props.projects.map((project) => (
                  <div className="card">
                    <header>{project.title} <a style={{paddingLeft:'15px'}} href={project.gitpath}> <GithubOutlined /></a> </header>
                    <a href={project.linkpath}> <div style={{width:'300px', height:'300px'}} className={project.urlpath} /> </a>
                </div>
            ))
        }          
              
        </div>
    );
};

export default Project;