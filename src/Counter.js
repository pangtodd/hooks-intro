import React, { useEffect, useState, useReducer } from 'react';

const bobby={
  counter: 0
}

function brown(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter +1
      };
      default:
        throw new Error(`There is no action matching ${action.type}.`);

  }
}

function Counter(){
  const [state, dispatch] = useReducer(brown, bobby);
  const [hidden, setHidden] = useState(true)

  useEffect(()=> {
    document.title = state.counter;
  }, [state.counter] );

  return (
    <React.Fragment>
      {hidden ? <h1>{state.counter}</h1>: <h1>Count Hidden</h1>}
      <button onClick={()=> dispatch({type: 'increment'})}>COUNT!</button> 
      <br></br>
      <br></br>
      <button onClick={()=> setHidden(!hidden)}>Hide/Seek</button>
    </React.Fragment>
  )
}

export default Counter;