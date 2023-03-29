import { FC, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';
import { types } from '../types/types';

interface Props {
  children: JSX.Element,
}

const initialState = {
  logged: false
}

const init = () => {

  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : null;

  return {
    logged: !!user,
    user
  }
}

export const AuthProvider: FC<Props> = ({ children }) => {

  const [ authState, dispatch ] = useReducer(authReducer, initialState, init);

  const login = (name = '') => {

    const user = {id: 'xyz', name};

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');

    const action = {
      type: types.logout
    };

    dispatch(action);

  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout  
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
