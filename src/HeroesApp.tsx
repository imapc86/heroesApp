import {AppRouter} from './router/AppRouter'
import { AuthProvider } from './auth/context/AuthProvider';


const HeroesApp = () => {

  return (    
    <div className="container-fluid px-0">
      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
    </div>
  );
  
};

export default HeroesApp;