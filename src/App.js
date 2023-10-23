import React from "react";

const App = () => {
  const portfolioData = {
    name: "R.Praisy Sathvika",
    reg: "21BCE9718",
    place: "Andhra Pradesh, India",
    skills: [
      "Graphic designer",
      "App Developer",
      "Web Developer",
      "doing my research in AI&ML",
      "Data Analyst",
      "Event Manager",
    ],
    projects: [
      {
        title: "-Weather Monitoring System Using Arduino",
        description:
          "It is done as a part of Engineering Clinics.it help to identify weather conditions",
      },
      {
        title: "-Earth Quake Detector Machine using Arduino",
        description:
          "Aiming to develop a earthquake detector which helps to save many lives",
      },
      {
        title: "-Fake news detection using Machine learning",
        description:
          "The primary goal is to mitigate the false impact of wrong info and help users make more informed decisions when consuming news content",
      },
      {
        title: "-Face mask detection using Deep learning",
        description:
          "Helps to detect the person wearing mask &face",
      },
      {
        title: "-=>Created wedding planner website",
        description:
          "Helps people to find  best event managing company",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2>
            <u>REGISTRATION NUMBER:</u> {portfolioData.reg}
          </h2>
          <h2>
            <u>PLACE:</u> {portfolioData.place}
          </h2>
        </div>
        <div className="body">
          <div className="about">
            <h3>
              <u>ABOUT ME</u>
            </h3>
            <p>
              I'm a third-year student at Vellore Institute of Technology
              majoring in computer science and engineering with specilaization in Artificial Intelligence and machine learning.
              Additionally, I am interested in machine and data science projects, and doing analysis on business related data",
              I'm passionate girl,who loves to code and debug and building websites for fun,I have a solid background in
              software development and computer science as a BTech student. 
              Graphic designer, web development, and application development are just a
              few of the tech-related topics that I find fascinating. Right now,
              I'm working as an intern in the software development industry,
              where I'm developing my talents and getting real-world experience.
              I'm enthusiastic about how technology is advancing and how it will
              continue to influence our future.
            </p>
          </div>
          <div className="skills">
            <h3>
              <u>SKILLS</u>
            </h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3>
              <u>PROJECTS</u>
            </h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;