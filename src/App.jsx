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
        <h2 id="projectsHeader">Projects:</h2>
        <Project title="Lexipal" description="Calculate the relative frequency of any word in the English Language" link="https://chicago-august-20231.github.io/Word-Frequency-Calculator/" />
        <Project title="DnD Character Generator" description="Easily create and save your very own Dungeons and Dragons characters with stat blocks" link="https://dnd-character-generator-app-3900836cda13.herokuapp.com/" />
        <Project title="Talker" description="Augmentative & Alternative Communication Device. Link coming soon." link="" />
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

