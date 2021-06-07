const initialState = {
    counter : 0
  };
const counter_reducer = (state = initialState, action) => {

    switch(action.type){
        case "increment": {
            return {...state,counter:state.counter + 1};
        }
        case "decrement": {
            return {...state,counter:Math.max(0, state.counter - 1)};
        }
        default: {
            return state;
        }
        }
}

export default counter_reducer;
