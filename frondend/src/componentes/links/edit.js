import React  from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const Edit = (props) => {
    const location = useLocation();
    const {enlace} = location.state;
   
    const { register, handleSubmit } = useForm();
    const history = useHistory();  
    const { token } = useAuth();
   
    const onSubmit = async(e) => {  
   
         const data = {
             
            "titulo" : e.titulo,
            "url" : e.url,
            "descripcion": e.descripcion
         };
    
        
         await axios(`${process.env.REACT_APP_API_URL}/edit/${ enlace.id}`, {
              method: "put",              
              headers : { 'x-access-token' : token},
              data
                   
         }); 
         
         history.push("/enlaces/list");
    };  


  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card">
            <div className="card-body">
              <form onSubmit= {handleSubmit(onSubmit)}>
   
                    <div className="form-group">
                    <input
                        type="text"
                        defaultValue={`${enlace.titulo}`}
                        className="form-control"
                        name="titulo"
                        placeholder="Titulo"
                        {...register("titulo")}
                        
                    />
                    </div>
                    <div className="form-group">
                    <input
                        type="url"
                        defaultValue={`${enlace.url}`}
                        className="form-control"
                        name="url"
                        placeholder="Url"
                        {...register("url")}
                    />
                    </div>
                    <div className="form-group">
                    <textarea
                        className="form-control"
                        name="descripcion"
                        rows="2"
                        placeholder="Descripción"
                        defaultValue = {enlace.descripcion}
                        {...register("descripcion")}
                    >
                        
                    </textarea>
                    </div>
                    <div className="form-group">
                    <button className="btn btn-success">Grabar</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
   };

export default Edit;
