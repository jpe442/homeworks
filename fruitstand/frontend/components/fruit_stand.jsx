import React from 'react';

const FruitStand = (props) => (
  <div>
    <ul>
      {props.fruits.map((fruit, idx) => <li key={idx}>{fruit}</li>)}
    </ul>
    <button onClick={props.addApple}>Add Apple</button>
    <button onClick={props.addOrange}>Add Orange</button>
    <button onClick={props.clearFruit}>Clear</button>
  </div>
)

export default FruitStand;