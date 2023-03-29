import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth/context/AuthContext';

interface Props{
  children: JSX.Element
}

export const PrivateRoute: FC<Props> = ({ children }) => {

  const { logged } = useContext(AuthContext);

  return (logged) ? children : <Navigate to="login"/>
  
}
