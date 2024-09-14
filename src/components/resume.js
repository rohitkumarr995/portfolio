import { useEffect, useState } from "react";
import ArrowUp from "../utils/arrow-up";

const Resume = () => {
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    setOpacity(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        className={`fade-in ${opacity ? "visible" : ""} resume-main-container`}
      >
        <div className="resume-headline-desc">
          <h2 id="headline-title">Resume</h2>
          <p id="headline-desc">
            Skilled professional with 2.5 years of experience in ReactJS development and automation
            testing. Expertise in designing and
            maintaining ReactJS applications and automating test scripts. Proven
            ability to improve software quality and streamline testing processes
            in Agile environments.
          </p>
        </div>
        <div className="resume-details-desc">
          <aside className="left-side-panel">
            <div className="basic-details">
              <h2 style={{ fontWeight: "normal" }}>Summary</h2>
              <div className="summary-details">
                <h3 id="resume-name">Rohit Kumar</h3>
                <p>
                  Skilled professional with over 2.5 years of experience in ReactJS developent,
                  and automation testing. Expertise in ReactJS, Redux Toolkit,
                  HTML, CSS (SCSS), and JavaScript. Skilled in API integration
                  using Axios, and proficient with GitHub for version control.
                  Expertise in designing and maintaining ReactJS applications
                  and automating test scripts. Proven ability to improve
                  software quality and streamline testing processes in Agile
                  environments.
                </p>
                <ul id="basic-details-list">
                  <li>Sector-167, Noida, Uttar Pradesh, India</li>
                  <li>+91-7906916680</li>
                  <li>rkrs227@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="educational-details">
              <h2 id="education-identifier" style={{ fontWeight: "normal" }}>
                Education
              </h2>
              <div className="education-list">
                <div className="educational-detail-1">
                  <h2 className="courseid">Bachelor of Technology (B.Tech)</h2>
                  <div className="course-details-1">
                    <h3>
                      <i>
                        Dayalbagh Educational Institute, Deemed University, Agra
                      </i>
                    </h3>
                    <div id="ed-date">2013 – 2017</div>
                    <h4>CGPA - 7.18</h4>
                  </div>
                </div>
                <div className="educational-detail-2">
                  <h2 className="courseid">
                    Higher Secondary Education (12th)
                  </h2>
                  <div className="course-details-2">
                    <h3>
                      <i>REI Intermediate College, Agra</i>
                    </h3>
                    <div id="ed-date">2011 – 2013</div>
                    <h4>Percentage - 89.8%</h4>
                  </div>
                </div>
                <div className="educational-detail-3">
                  <h2 className="courseid">Matriculation (10th)</h2>
                  <div className="course-details-3">
                    <h3>
                      <i>REI Intermediate College, Agra</i>
                    </h3>
                    <div id="ed-date">2010 – 2011</div>
                    <h4>Percentage - 78%</h4>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <aside className="right-side-panel">
            <h2 style={{ fontWeight: "normal" }}>Professional Experience</h2>
            <div className="experience-block">
              <h3 id="experience-title">Tata Consultancy Services</h3>
              <div id="ed-date">02/2023 – Present</div>
              <div className="exp-details-1">
                <div id="designation">Systems Engineer</div>
                <ul>
                  <li>
                    Develop and maintain responsive web applications using
                    ReactJS, enhancing user engagement.
                  </li>
                  <li>
                    Automate testing with Jest, Selenium, and Postman,
                    streamlining testing processes.
                  </li>
                  <li>
                    Collaborate with teams to deliver high-quality software,
                    aligning with Agile methodologies.
                  </li>
                  <li>
                    Execute unit, integration, and regression testing, reducing
                    post-release issues.
                  </li>
                  <li>
                    Enhance automation frameworks, accelerating testing cycles
                    and improving software updates.
                  </li>
                  <li>
                    Troubleshot and resolve complex issues in development and
                    testing phases, ensuring smooth software releases.
                  </li>
                  <li>
                    Implement and maintain effective test cases to ensure
                    comprehensive coverage.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-block">
              <h3 id="experience-title">Foray Software Private Limited</h3>
              <div id="ed-date">12/2021 – 01/2023</div>
              <div className="exp-details-2">
                <div id="designation">Software Test Engineer</div>
                <ul>
                  <li>
                    Developed and executed automation test scripts to ensure the
                    quality and reliability of software products.
                  </li>
                  <li>
                    Analyzed test results and reported defects using issue
                    tracking tools like Jira, ensuring timely resolution.
                  </li>
                  <li>
                    Implemented best practices for test automation, including
                    continuous integration and version control with tools like
                    Git.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-block">
              <h3 id="experience-title">Imtac India Private Limited</h3>
              <div id="ed-date">09/2020 – 11/2021</div>
              <div className="exp-details-3">
                <div id="designation">Associate</div>
                <ul>
                  <li>
                    Project initiation and meeting with clients for project roll
                    out.
                  </li>
                  <li>
                    Coordinated project schedule, resources, equipment and
                    information.
                  </li>
                  <li>
                    Undertook project task as required and provided
                    administrative support as needed.
                  </li>
                  <li>Ensured all documentation is maintained properly.</li>
                  <li>
                    Daily, weekly and monthly report generation for customer on
                    demand.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-block">
              <h3 id="experience-title">Innodata India Private Limited</h3>
              <div id="ed-date">07/2020 – 10/2020</div>
              <div className="exp-details-4">
                <div id="designation">Associate</div>
                <ul>
                  <li>
                    Assisted in the development of project plans and timelines
                    to ensure timely completion of project milestones.
                  </li>
                  <li>
                    Undertook project task as required and provided
                    administrative support as needed.
                  </li>
                  <li>Ensured all documentation was maintained properly.</li>
                </ul>
              </div>
            </div>
            <div className="experience-block">
              <h3 id="experience-title">
                CG Power and Industrial Solutions Limited
              </h3>
              <div id="ed-date">06/2017 – 02/2020</div>
              <div className="exp-details-5">
                <div id="designation">Associate</div>
                <ul>
                  <li>
                    Inspected, verified and validated the parameters of product
                    stages.
                  </li>
                  <li>Initiated and implemented improvement actions.</li>
                  <li>
                    Worked on Root Cause Analysis (RCA) for any non-conformity
                    in product and process.
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <ArrowUp />
    </>
  );
};

export default Resume;
