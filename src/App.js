import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Main, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
