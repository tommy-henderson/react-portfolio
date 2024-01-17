// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Project from './Project';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about" component={() => <div>About Me Content</div>} />
          <Route path="/contact" component={() => <div>Contact Content</div>} />
          <Route path="/projects" component={() => (
            <div>
              <Project title="Project 1" description="Description of Project 1" link="https://project1.com" />
              <Project title="Project 2" description="Description of Project 2" link="https://project2.com" />
              <Project title="Project 3" description="Description of Project 3" link="https://project3.com" />
            </div>
          )} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
