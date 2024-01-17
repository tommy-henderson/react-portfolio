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
        {
          <p>To be, or not to be: that is the question: whether 'tis nobler in the mind to suffer the slings and arrows of
            outrageous fortune, or to take arms against a sea of troubles, and by opposing end them? To die: to sleep; no
            more; and, by a sleep to say we end the heart-ache and the thousand natural shocks that flesh is heir to, 'tis a
            consummation devoutly to be wish'd.</p>
        }
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <Project title="Project 1" description="Description of Project 1" link="https://project1.com" />
        <Project title="Project 2" description="Description of Project 2" link="https://project2.com" />
        <Project title="Project 3" description="Description of Project 3" link="https://project3.com" />
      </section>
      <section id="contact">
        <h2>Contact</h2>
        {<div>Email: tommyh224@gmail.com</div>}
        {<div>Phone: 847-111-1111</div>}
      </section>
      <Footer />
    </div>
  );
};

export default App;

