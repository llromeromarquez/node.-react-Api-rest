import React  from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useHistory } from "react-router-dom";
import useAuth from "../auth/useAuth";

const Add = () => {
   
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const { token } = useAuth();
    
    const onSubmit = async(e) => {  
     
               
         const data = {
             
            "titulo" : e.titulo,
            "url" : e.url,
            "descripcion": e.descripcion
         };
         
         await axios(`http://localhost:5000/add`, {
          method: "post",              
          headers : { 'x-access-token' : token},
          data
               
        }); 
  
        history.push("list");
     
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
                        className="form-control"
                        name="titulo"
                        placeholder="Titulo"
                        {...register("titulo")}
                        
                    />
                    </div>
                    <div className="form-group">
                    <input
                        type="url"
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


export default Add;
