import React from 'react';

import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Home from '../components/containers/Home';
import About from '../components/containers/About';
import Project from '../components/containers/Project';
import Skill from '../components/containers/Skill';

const Layout = () => {
  return (
    <>
      <Sidebar />

      <main>
        {/* Section 1 "Home" */}
        <Home />

        {/* Section 2 "About me" */}
        <About />

        {/* Section 3 "My Projects" */}
        <Project />

        {/* Section 4 "Skill" */}
        <Skill />
      </main>

      <Footer />
    </>
  )
}

export default Layout;