 import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sinan from './components/Sinan'
import Gokalp from './components/Gokalp'
import Egocomponent from "./components/EgoComponent"
import ElifComponent from './components/ElifComponent'
function App() {
    //const [count, setCount] = useState(0)

    const myreducer = ( state, action ) =>{
      if(action.type == 'increment'){
        return state +1;
      } else if (action.type == 'decrement'){
        return state - action.payload;
      }
      return state;
    }

    const initialState = 0;
    const [count, dispatchCount] = useReducer(myreducer, initialState);


  return (
    <>
      <Sinan />
      <Egocomponent />
      <ElifComponent />
      <Gokalp/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => { dispatchCount({type: 'decrement', payload: 5})}}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
 

export default App;
