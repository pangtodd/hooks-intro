import React, { useState } from 'react';

function Counter(){
  const [counter, setCounter] = useState(0);

  return (
    <React.Fragment>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter(counter +1)}>COUNT!</button>
    </React.Fragment>
  )
}

export default Counter;