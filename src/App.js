import React from "react";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Myprojects from "./components/Myprojects";
import Proj from "./components/Proj";
import Skills from "./components/Skills";
import projects from "./Projects";

function App() {
  const proj = projects.map(item => {
    return (
      <Proj
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Aboutme />
      <Myprojects />
      {proj}
      <Footer />
    </div>
  );
}

export default App;
