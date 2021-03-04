import './App.css';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { increment, decrement } from "./actions";
import { useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <input type="number" placeholder="step"
        onChange={(e) => setStep(parseInt(e.target.value))} />
      <button onClick={() => dispatch(increment(step))}> + </button>
      <button onClick={() => dispatch(decrement(step))}> - </button>
      {isLogged && <h3>For logged users only</h3>}

    </div>
  );
}

export default App;
