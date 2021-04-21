import {FETCH_POST}  from '../actions/types'
const initialState = {
  post: 'blah blah ',
  items:[]
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
switch(action.type){
    case FETCH_POST:
        return{
            newState,
            items: action.payload
        }
    default:
        return newState
}
};

export default reducer;
