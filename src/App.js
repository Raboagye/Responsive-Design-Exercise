import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Youtube from "./components/Youtube/Youtube";
function App() {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <About />
     <Skills />
     <Youtube />
     <Contact />
    </div>
  );
}

export default App;
