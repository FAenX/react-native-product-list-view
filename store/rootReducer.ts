import { combineReducers } from 'redux';
import { createStore } from "redux";
import {Product} from '../types'

//  reducer
const initialState = null
  
  
//reducer
const products = (state = initialState, action: Action)=> { 
    switch (action.type) {
      case 'SET_STATE':
        return {...action.state};
      default:
        return state;
    }
};
  

// combine reducers
const rootReducer = combineReducers({
        products
    });

// create redux store
export const store = createStore(rootReducer);


type Action = {
    state: Product[],
    type: string
}