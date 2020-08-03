import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../src/components/about";
import Contact from "../src/components/contact";
import Navbar from "../src/components/navbar";
import Home from "../src/components/home";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

library.add(fab, fas);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
