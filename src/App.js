import React from "react";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Myprojects from "./components/Myprojects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Aboutme />
      <Myprojects />
      <Footer />
    </div>
  );
}

export default App;
