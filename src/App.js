import React from "react";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Aboutme />
    </div>
  );
}

export default App;
