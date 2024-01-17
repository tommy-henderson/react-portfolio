import React from 'react';
import Header from './components/header';
import Project from './components/Project';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Header />
      <section id="about">
        <h2>About Me</h2>
        {/* Your about me content goes here */}
      </section>
      <section id="contact">
        <h2>Contact</h2>
        {/* Your contact content goes here */}
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <Project title="Project 1" description="Description of Project 1" link="https://project1.com" />
        <Project title="Project 2" description="Description of Project 2" link="https://project2.com" />
        <Project title="Project 3" description="Description of Project 3" link="https://project3.com" />
      </section>
      <Footer />
    </div>
  );
};

export default App;

