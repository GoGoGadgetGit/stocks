import { createStore } from 'redux';


function reducer(state, action){

  if (action.type === 'DISPLAY'){
    return{
      display: action.payload,
      tracked: state.tracked
    }
  }

  if (action.type === 'TRACK'){
    return{
      display: state.display,
      tracked: state.tracked.concat([action.payload])
    }
  }
  return state;
}

export default createStore(reducer, {
  display: [],
  tracked: []
});