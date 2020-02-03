import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside>
      <div>
        <h3>SUMMARY</h3>
        <p>
          Full Stack Software Developer with a background in audio production and aeronautics QA. Proponent of quality, tested code with a penchant for communication and problem solving. Proven self-learner, humble pupil, and quickly adaptable. Analog Synth enthusiast.
        </p>
      </div>
      <div>
        <h3>CONTACT DETAILS</h3>
        <p> Mobile: xxx-xxx-xxxx </p>
        <p> Email: xxnxxxxxxxxx@xxxxx.xxx </p>
        <a href='github.com/xanxxdrexsox'>Github</a>
        <br/>
        <a href='linkedin.com/in/xanxxdrexsox'>Linkedin</a>
      </div>
      <div>
        <h3>TECH STACK</h3>
        <p>
          Languages: JavaScript, HTML, CSS. Dabbled in Python, C++, and C#
        </p>
        <p>
          Environments & Frameworks:  Node.js, Express, Mongoose, React, Redux, Processing/P5
        </p>
        <p>
          Databases: MongoDB, Postgres
        </p>
        <p>
          Testing: Jest, Q-unit, TDD
        </p>
        <p>
          Other:  Git, Github, Heroku, VSCode, TravisCI, Compass, Postman
        </p>
      </div>
    </aside>
  );
}
