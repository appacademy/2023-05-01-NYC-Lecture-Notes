import React, { useState } from "react";
import Time from "./components/Time";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTime: true
    };
    this.clickHandler = this.clickHandler.bind(this);
  };

  clickHandler() {
    this.setState({showTime: !this.state.showTime});
  }

  render() {
    return (
      <>
        <h1>hello from app</h1>
        <button onClick={this.clickHandler}>Toggle time</button>
        {this.state.showTime && <Time />}
      </>
    );
  }
}

// function App() {

//   const [showTime, setShowTime] = useState(true);
//   const [count, setCount] = useState(0);

//   const clickHandler = () => {
//     // setShowTime(!showTime);
//     // setCount((old) => old + 1);
//     // setCount((old) => old + 1);
//     // setCount(count + 1);
//     // setCount(count + 1);

//     setShowTime((oldShowTime) => !oldShowTime);
//   }

//   return (
//     <>
//       <h1>Hello from App!</h1>
//       <button onClick={clickHandler}>Toggle time</button>
//       {showTime && <Time />}
//       {/* {count} */}
//     </>
//   );
// }




export default App;
