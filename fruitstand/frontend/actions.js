// Here is where we make action creators
export const ADD_FRUIT = 'ADD_FRUIT';
export const CLEAR = 'CLEAR';

export const addOrange = () => ({
  type: 'ADD_FRUIT',
  fruit: 'orange'
})

export const addApple = () => ({
  type: 'ADD_FRUIT',
  fruit: 'apple'
})

export const clearFruit = () => ({
  type: 'CLEAR',
})

