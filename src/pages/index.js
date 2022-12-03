
import React from 'react';

import Layout from '../components/Layout';

import Sidebar from '../components/Sidebar';
import config from '../../config';
import logo from '../assets/images/logo.png';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <img src={logo} width="80" alt="Mifta Sintaha" />
          <br />
          <h2 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h2>
          <div className="subheading mb-5 withBorder main">
            {config.address} ·&nbsp;
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Mifta is a Full Stack Software Engineer and a YouTube Content Creator. She is currently pursuing her Master's Degree in Computer and Software Engineering at the University of British Columbia.&nbsp;
            She previously worked as a Software Engineer for 4.5 years at <a href="https://welcomesoftware.com">Welcome</a> (now Optimizely).
            Having an Engineering degree, Mifta also composes instructional tutorials for an international audience of Computer Science students on YouTube, hoping to aid them in their studies.
            She is eager to start asking questions - to observe and solve the next puzzle. <i className="fa fa-puzzle-piece"></i> <br/>
            Her ultimate mission is to master the art of software engineering and aims to build something worth remembering that will aid in making peoples' lives easier.
            Mifta is a team player and her specialty is her ability to take ownership, manage her team and workflow while maintaining punctuality in getting shit <i className="fa fa-tasks"></i> done!
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h3 className="mb-5">Experience</h3>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h4 className="mb-0">Software Engineer</h4>
              <div className="subheading mb-3 withBorder">Optimizely (previously NewsCred)</div>
              <p>
                Enhanced the experience and built features for the SaaS <a href="https://www.optimizely.com/products/content-marketing/">platform</a> <br />
                <ul>
                  {config.newscredExperience.map(e => <li>{e}</li>)}
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2016 - May 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h4 className="mb-0">Content Creator</h4>
              <div className="subheading mb-3 withBorder">YouTube</div>
              <p>
                <ul>
                  {config.youtubeExperience.map(e => <li>{e}</li>)}
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2014 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h4 className="mb-0">Software Engineer (Freelance)</h4>
              <div className="subheading mb-3 withBorder">EduHive</div>
              <p>
                <ul>
                  <li><a href="https://eduhive.com.bd"><strong>EduHive (Web)</strong></a>: Created features for the web platform EduHive - a Learning Management System which included - enabling online mock admission tests, generating mark-sheets along with answer sheets, implemented  an exam question builder, integrated KaTex math equation rich text area and authentication middleware.
</li>
                  <li><a href="https://play.google.com/store/apps/details?id=com.techhive.eduhive"><strong>EduHive (Mobile)</strong></a>: Built and published an android react native mobile app - implemented the logic using REST API, integrated payment system and authentication for google and facebook.</li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2019 - September 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h4 className="mb-0">Author</h4>
              <div className="subheading mb-3 withBorder">Packt Publishing</div>
              <p>
                Published video course on the basics of 
                &nbsp;<a href="https://www.packtpub.com/application-development/learning-react-native-development-videos">
                "Learning React Native Development"</a>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2018 - September 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h4 className="mb-0">Web Developer (Part time)</h4>
              <div className="subheading mb-3 withBorder">WebAble Digital</div>
              <p>
                <ul>
                  <li>Created dynamic websites with AngularJS, ExpressJS & MeteorJS</li>
                  <li>Worked with Facebook API and D3JS  for collecting page Analytics and visualization</li>
                  <li>Created and customised Wordpress themes</li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2014 - September 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h4 className="mb-0">Teaching Assistant (Undergraduate)</h4>
              <div className="subheading mb-3 withBorder">BRAC University</div>
              <p>
                <ul>
                  <li><strong>CSE221: Algorithms Course Student Tutor</strong> <br />
                  Graded test papers, assignments and helped students during Tutoring time in understanding/solving lab assignments and algorithm simulations as well as Big O complexities. Gave practise problems with small variations for understanding the concepts further.
                  </li>
                  <li><strong>CSE111: Programming Language II Course Student Tutor</strong> <br />
                  Created video tutorials (Tracing programs playlist) for solving JAVA program tracing which helped students in understanding Object oriented principles. Also graded test papers and assignments.</li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2014 - September 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h3 className="mb-5">Education</h3>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h4 className="mb-0">The University of British Columbia (UBC)</h4>
              <div className="subheading mb-3 withBorder">Master of Applied Science</div>
              <div>Computer Enginering</div>
              <p>Grade: 92%</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2021 - December 2022</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h4 className="mb-0">BRAC University</h4>
              <div className="subheading mb-3 withBorder">Bachelor of Science</div>
              <div>Computer Science & Enginering</div>
              <p>GPA: 3.87 (Highest Distinction)</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2013 - August 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h3 className="mb-5">Skills</h3>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item" title="Python">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item" title="JavaScript">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item" title="Java">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item" title="ReactJS">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item" title="AngularJS">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item" title="NodeJS">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item" title="Sass">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item" title="PHP">
              <i className="fab fa-php"></i>
            </li>
            <li className="list-inline-item" title="WordPress">
              <i className="fab fa-wordpress"></i>
            </li>
          </ul>

          <div className="subheading mb-3">I want to work with</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              ReactJS/NodeJS
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Flask/Django
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              MongoDB/MySQL
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              AWS Services
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h3 className="mb-5">Interests</h3>
          <p>
            Apart from being a software engineer, I enjoy traveling, vlogging, coffee and cafe hopping, going to the beach, watching animes and tv shows, reading fantasy novels.
            <br /> I also <i className="fa fa-heart"></i> hackathons and creating YouTube tutorials.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h3 className="mb-5">Awards &amp; Certifications</h3>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://ieeexplore.ieee.org/document/8631958"><strong>Best Paper Award</strong></a> - ICCIT, 2018 for the Paper <br />
              <em>
                M. Sintaha and M. Mostakim, "An Empirical Study and Analysis of the Machine Learning
                Algorithms Used in Detecting Cyberbullying in Social Media," 2018 21st International
                Conference of Computer and Information Technology (ICCIT), Dhaka, Bangladesh, 2018, pp.1-6. 
              </em>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              &nbsp;place winner at Inter-office Hackathon 2018 at April for building a messaging platform for NewsCred’s Content Marketing Platform.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              &nbsp;place winner in Inter-office Hackathon 2018 at October for building a Content Optimizer system - a system that tells you how SEO optimized your content is.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              &nbsp;place and 3<sup>rd</sup> place winner in Inter-office Hackathon 2019 at November for integrating a pdf/doc annotator and making our company platform mobile responsive.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>People's
              &nbsp;choice winner in Inter-office Hackathon 2020 on September for building a kanban board as well as quick task creation within the kanban board.
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;

