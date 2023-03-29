import { types } from '../types/types';

const initialState = {
  logged: false
}

interface initialState {
  logged: boolean
}

interface action {
  type: string,
  payload?: {
    id: string,
    name: string
  }
}

export const authReducer = (state:initialState = {logged:false}, action: action) => {

  switch (action.type) {

    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      };

    case types.logout:
      return  {
        logged: false,
      };
      
    default: 
      return state;
  }


}
