import React  from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./componentes/partials/navigation";
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import index from   "./componentes/index";
import profile from "./componentes/profile";
import signin from "./componentes/auth/signin";
import signup from "./componentes/auth/signup";
import list from "./componentes/links/list";
import edit from './componentes/links/edit';
import add from './componentes/links/add';
import  {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "bootswatch/dist/pulse/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import  {PrivateRoute, NotPrivateRoute}  from './componentes/links/PrivateRoute';
import AuthProvider from './componentes/auth/authProvider';
import NotFoundPage from './componentes/notFoundPage';


ReactDOM.render(
  <React.StrictMode>
     <AuthProvider>
    < BrowserRouter>
 
        <Navbar/>     
        <Switch>
          <NotPrivateRoute  exact path="/signin" component = { signin } />
          <NotPrivateRoute  exact path="/signup" component = { signup } />
          <PrivateRoute exact path="/profile" component = { profile } />
          <PrivateRoute path="/enlaces" component = { enlacesRoutes } />
          <PrivateRoute exact path="/edit" component = { edit } />
          <NotPrivateRoute exact path="/" component = { index } />
          <Route path = "*" component = {NotFoundPage}/>
         
          </Switch>
        <ToastContainer />
     </BrowserRouter>
     </AuthProvider>    
 
  </React.StrictMode>,
  document.getElementById('root')
);

function enlacesRoutes () {
  return (
    
    <Switch>
      <PrivateRoute exact path="/enlaces/list" component = { list }/>
      <PrivateRoute exact path="/enlaces/add" component = { add } />
    </Switch>
  ); 

}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
