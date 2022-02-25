import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';


export  function PrivateRoute({component: Component, ...rest}) {
        const {isLogged} = useAuth();

        return (
            <Route {...rest} > 
                { isLogged() ? (<Component />) : (<Redirect to = "/signin" />) }
            </Route>

        );
    };
   
export  function NotPrivateRoute({component: Component, ...rest}) {
        const {isLogged} = useAuth();

        return (
            <Route {...rest} > 
                { !isLogged() ? (<Component />) : (<Redirect to = "/profile" />) }
            </Route>

        );
};





