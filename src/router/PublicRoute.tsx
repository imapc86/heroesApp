import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth/context/AuthContext';

interface Props{
  children: JSX.Element
}

export const PublicRoute: FC<Props> = ({children}) => {

  const { logged } = useContext(AuthContext);

  return logged ? <Navigate to="/marvel" /> : children;
}
