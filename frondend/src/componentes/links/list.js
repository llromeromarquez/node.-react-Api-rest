import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format, register } from 'timeago.js';
import useAuth from "../auth/useAuth";

const List = () => {
  
  const [enlaces, setEnlaces] = useState([]);
  const { token } = useAuth();
  
 
  const cargarLinks = async() => {
   
        const res = await axios(`${process.env.REACT_APP_API_URL}/links`, {
              
                  headers : { 'x-access-token' : token }
        });

        setEnlaces(res.data);
   
  }

  useEffect(() => cargarLinks(), []);

  
  register('es_ES', (number, index, total_sec) => [
    ['justo ahora', 'ahora mismo'],
    ['hace %s segundos', 'en %s segundos'],
    ['hace 1 minuto', 'en 1 minuto'],
    ['hace %s minutos', 'en %s minutos'],
    ['hace 1 hora', 'en 1 hora'],
    ['hace %s horas', 'in %s horas'],
    ['hace 1 dia', 'en 1 dia'],
    ['hace %s dias', 'en %s dias'],
    ['hace 1 semana', 'en 1 semana'],
    ['hace %s semanas', 'en %s semanas'],
    ['1 mes', 'en 1 mes'],
    ['hace %s meses', 'en %s meses'],
    ['hace 1 año', 'en 1 año'],
    ['hace %s años', 'en %s años']
  ][index]);

  const timeago = timestamp => format(timestamp, 'es_ES');

  const handleClick = async(e) => {
    

          await axios(`${process.env.REACT_APP_API_URL}/delete/${ e }`, {
              method: "delete",              
              headers : { 'x-access-token' : token}
                   
         }); 
  
         cargarLinks();  
         
  }  

  if (enlaces.length !== 0) { 
              
    return (      
      <div className="container p-4">
        <div className="row">
              {  enlaces.map((enlace) => {
                return (
                <div  key={enlace.id} className="col-md-3">
                  <div className="card text-center">
                    <div className="card body">
                      <a href = {enlace.url} target="_blank" rel="noreferrer">
                        <h3 className="card-title text-uppercase">
                          { enlace.titulo }
                        </h3>
                        
                      </a>
                      <p className="m-2"> { enlace.descripcion }</p>
                      <p className="m-2"> { timeago (enlace.fch_creado) }</p>
                      <Link to = {{ pathname: "/edit", state:  {enlace}  }}  className="btn btn-success">Editar </Link>
                      <button className="btn btn-danger" onClick = {() => handleClick(enlace.id)} >Eliminar</button>
                      
                    </div>
                  </div>
                </div>
              )})
              }
        </div>
      </div>
    )
  }

  else {         
        return ( 
                <div className="col-md-4 mx-auto">
                  <div className="card card-body text-center">
                    <p>No Existen Enlaces Guardados</p>
                    <Link to = "/enlaces/add" >Guarde Uno</Link>
                  </div>  
               </div>
        )
  }          
      
  
}
export default List;
