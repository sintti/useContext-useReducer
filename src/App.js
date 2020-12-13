import React, { useContext } from 'react';
import { CounterContext, CounterProvider } from './context';

function Counter() {
  const { state, dispatch } = useContext(CounterContext);

 return (
    <div>
      <h5>Count: {state.count}</h5>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
function SeparateComponent() {
  const { state, dispatch } = useContext(CounterContext);
  
 return (
    <div>
      <h1>Shared Count: {state.count}</h1>
     <button onClick={() => dispatch({ type: 'init_state' })}>
        Fetch Again
      </button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
        <CounterProvider>
          <Counter />
          <SeparateComponent />
        </CounterProvider>
    </div>
  );
}

export default App;
