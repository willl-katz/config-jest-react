import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handlePClick = this.handlePClick.bind(this);

  //   this.state = {
  //     name: 'Willian Katz',
  //     counter: 0,
  //   };
  // }

  state = {
    name: 'Willian Katz',
    counter: 0,
  };

  // handlePClick() {
  //   this.setState({ name: 'Júnior' });
  //   console.log('OLHA O MACACOOO!');
  // }

  handleAClick = () => {
    const { counter } = this.state;
    const nextCounter = counter + 1;
    this.setState({ name: nextCounter, counter: nextCounter });
  }

  render() {
    const { name } = this.state;

    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 onClick={this.handlePClick}>{name}</h1>
        <p className="read-the-docs" onClick={this.handleAClick}>
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
