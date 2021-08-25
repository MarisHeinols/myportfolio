import "./App.css";
import NavBar from "./components/layout/NavBar";
import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import Home from "./components/layout/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='container'></div>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/' component={Home} />
          </Switch>
        </AnimatePresence>
        <projectFetch />
      </div>
    </Router>
  );
}

export default App;
