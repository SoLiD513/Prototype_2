import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
// import Gameplay from "./pages/Gameplay/Gameplay";
// import Instructions from "./pages/Instructions/Instructions";
// import License from "./pages/License/License";
import Dictaphone from "./components/SpeechRecognition/SpeechRecognition";
import ErrorPage from "./pages/ErrorPage/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/game" component={Dictaphone} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
