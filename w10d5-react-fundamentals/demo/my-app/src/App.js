import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import JobIndex from "./components/JobIndex";
import JobShow from "./components/JobShow";
import Error from "./components/Error";
import './styles/app.css';

function App(props) {
  // debugger;
  return (
    <div className="app">
      <h1>Hello { props.name }! I'm App</h1>
      <JobIndex />
      <Switch>
        <Route path="/error" component={Error} />
        <Route path="/jobs/:jobId" component={JobShow} />
        {/* <Route path="/jobs" component={JobIndex} /> */}
        <Route exact path="/">
          <h1>This is Home.</h1>
        </Route>
        <Redirect to="/error" />
      </Switch>

    </div>
  );
}

export default App;
