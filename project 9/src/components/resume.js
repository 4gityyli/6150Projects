import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://s2.loli.net/2022/12/16/BPiUShTmbZoHlqn.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Yuyan Li</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> As a software developer, I enjoy the continuous challenge of crashing the glass ceiling of the tech world. My programming expertise includes cross-platform proficiency(Windows, Linux), strong foundation in programming languages (including Python, Java, C++, Java Script, SQL and CSS/ HTML5); and advanced knowledge of the developer applications, tools, methodologies and the best practices (including OOD, web development) and engineering big-data systems. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>4N 2nd, San Jose</p>
            <h5>Phone</h5>
            <p>408-639-4787</p>
            <h5>Email</h5>
            <p>li.yuyan1@northeastern.edu</p>
            <h5>Web</h5>
            <p>https://www.linkedin.com/in/yuyanlirenee/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2022}
              endYear={2024}
              schoolName="Northeastern University-Silicon Valley"
              schoolDescription="M.S. Computer Software Engineering in Information Systems Program"
               />

            <Education
              startYear={2018}
              endYear={2022}
              schoolName="Shanghai Jiao Tong University"
              schoolDescription="B.S. Major in Information Systems. Minor in Finance"
              />
            <hr style={{borderTop: '3px solid #f9f7fa'}} />

            <h2>Professional Experience</h2>

            <Experience
              startYear={2022.4}
              endYear={2022.8}
              jobName="Intel Corporation - Software Engineer Intern "
              jobDescription="Built a pipeline from online laptop shopping data collection to business intelligence (BI) reporting for marketing decision making 
              Implemented a legally compliant web scraper that collected Intel chip based laptop product information from JD.com (Chinese equivalent of Amazon), parsed over 20k technical specifications and parameters, and stored the data into a Redis database.
              Created digital market performance metric dashboards with additional data from 4 different ads performance monitoring systems.
               "
              />

              <Experience
                startYear={2021.7}
                endYear={2021.9}
                jobName="Ping An Insurance Company of China - Software Engineer Intern "
                jobDescription="bEngaged in the design and development phase of a ToB mobile app for mechanical equipment leasing services 
                Extracted information of 10k+ equipments, including product brand, model, price, technical specifications, transformed the information into structured data, and load the data into Oracle SQL database to support the mobile application(ETL with Python)
                Set up SQL based monitors to track real-time operation performance of energy consumption, and generated weekly business reports to recommend actionable strategies for equipment maintenance scheduling and other operation optimizations"
                />

              <Experience
                startYear={2020.7}
                endYear={2020.12}
                jobName="Xforceplus Information Technology Co. Ltd - Software Engineer Intern"
                jobDescription="Communicated business and technical requirements to product and development teams, cooperatively established a standardized electronic invoicing system to streamline the API of  upstream and downstream invoice management process "
                />
              <hr style={{borderTop: '3px solid #f9f7fa'}} />
              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={100}
                />
                <Skills
                  skill="Java"
                  progress={80}
                  />
                  <Skills
                    skill="Javascript"
                    progress={60}
                    />
                    <Skills
                      skill="SQL"
                      progress={40}
                      />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
