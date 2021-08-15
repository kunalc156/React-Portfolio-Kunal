import React  from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import resume from '../assets/files/resume.pdf';

const Resume = () => {

  return (
    <>
      <section id="experience">

            <h3 class="section-heading"> EXPERIENCE <a  style={{paddingLeft:'10px', fontSize: '16px'}} href={resume}><DownloadOutlined />Download Resume</a>  </h3>
            <div class="timeline">
                <div class="container left">
                  <div class="content">
                    <h2>July 2019 - Present</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                  </div>
                </div>
                <div class="container right">
                  <div class="content">
                    <h2>Sept 2017 - Jun 2019</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                  </div>
                </div>
                <div class="container left">
                  <div class="content">
                    <h2>Nov 2016 - Sept 2017</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                  </div>
                </div>
                <div class="container right">
                  <div class="content">
                    <h2>Apr 2014 - July 2015</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                  </div>
                </div>
              </div>

        </section>
        <section id="skills">
            <div class="skill">
                <h3 class="section-heading"> SKILLS  </h3> 
                <div class="skill-content">

                    <p>HTML</p>
                    <div class="skill-container">
                        <div class="progress html">90%</div>
                    </div>
                    <p>PHP</p>
                    <div class="skill-container">
                        <div class="progress php">60%</div>
                    </div>
                    <p>Angular</p>
                    <div class="skill-container">
                        <div class="progress angular">70%</div>
                    </div>
                    <p>NodeJS</p>
                    <div class="skill-container">
                        <div class="progress nodejs">20%</div>
                    </div>
                    <p>Javascript</p>
                    <div class="skill-container">
                        <div class="progress javascript">80%</div>
                    </div>
                    
                </div>
            </div>
        </section>
        <p> </p>

  </>
  );
};

export default Resume;