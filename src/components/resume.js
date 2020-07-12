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
                src="data:image/jpeg;base64,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"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Aref Smiley</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Full Slack Developer, Biomedical Engineer, Electrical Engineer.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Cleveland OH</p>
            <h5>Phone</h5>
            <p>(216) 333-2222</p>
            <h5>Email</h5>
            <p>arefsmiley@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Case Western Reserve University"
              schoolDescription="Full slack developement bootcamp"
               />

               <Education
                 startYear={2014}
                 endYear={2018}
                 schoolName="Cleveland State University"
                 schoolDescription="PhD in Biomedical Engineering"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2019}
              jobName="Software Developer"
              jobDescription="CoAx Technology"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Research Engineer"
                jobDescription="Cleveland Clinic"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={40}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
