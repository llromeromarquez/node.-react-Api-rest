import React  from "react";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";


const Navigation = () => {
 
 const {isLogged, logout} =  useAuth(); 
 
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Enlaces Favoritos</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        { (isLogged()) ? 
             
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to = "/enlaces"  id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-expanded="false"> 
                   Enlaces 
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item button-NavBar" to = "/enlaces/list">Todos los enlaces</Link></li>
                    <li><Link className="dropdown-item button-NavBar" to="/enlaces/add">Agregar Enlace</Link></li>
                </ul>
            </li>
            <li className="nav-item">
                <Link to="/profile" className="nav-link">Archivo</Link>
             </li>
             <li className="nav-item">
                 <button className="nav-link button-NavBar" onClick = {logout}>Cerrar Sección</button>
             </li>
          </ul>
        :
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    
             
                 <li className="nav-item">
                    <Link to="/signin" className="nav-link">Ingresar</Link>
                 </li>
                 <li className="nav-item">
                    <Link to="/signup" className="nav-link">Registrarse</Link>
                 </li>
            
            </ul>
          </div>  
         
        }
        </div>          
      </div>
    </nav>
  );
};

export default Navigation;
