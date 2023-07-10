import { Switch } from 'react-router';
import './App.css';
import NumbersDisplay from './numbersDisplay';
import StudentIndex from './studentIndex';
import StudentShow from './studentShow';
import { Route } from 'react-router';
import Form from './form';

function App() {
  return (
      <div className='app'>
        <h1>React is working</h1>
        {/* <NumbersDisplay /> */}
        {/* <StudentIndex /> */}

        <Form />

        {/* <Switch>
          <Route path="/students/:studentName">
              <StudentShow />
          </Route>
        </Switch> */}
      </div>
  );
}

export default App;
