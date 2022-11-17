import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/home_component/home";
import Projects from "./components/projects_components/projects";
import About from "./components/about_component/About";
import ContactMe from "./components/contact_component/ContactMe";
import "./App.css";
const Typ = (word, time) => {
  const [currentState, setCurrentState] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCurrentState(word.slice(0, currentState.length + 1));
    }, time);
    return () => clearTimeout(timeOut);
  }, [currentState]);

  return currentState;
};
function App() {
  // const typed= Typ("hello world", 100)
  return (
    <div className='App'>
      <Home />
      <Projects />
      <About />
      <ContactMe />
    </div>
  );
}

export default App;
