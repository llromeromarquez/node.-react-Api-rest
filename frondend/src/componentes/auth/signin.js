import React  from "react";
import axios from "axios";
import {toast} from "react-toastify"
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import useAuth from "./useAuth";

// import { ingresar } from "../servicioPet";

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { login } = useAuth(); 
 
  const onsubmit = async(data) =>{

    const credenciales = { 
      nombreus :data.nombreus,
      clave : data.clave
    };
    
    
    const res = await axios.post("http://localhost:5000/ingresar", credenciales);
    alert("hola");
    if (res.data.auth)  {
   //   sessionStorage.setItem("token", res.data.token);  
     
      toast.success(` Bienvenido `);
      
      login(res.data.nombre, res.data.token); 
      
      history.push("/profile");
   
    }  
    else{
      
      toast.error("Usuario o Clave Incorrecta");
   }; 
  
  };

  return (
    
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center">
            <div className="card-header">
              <h3>Ingresar</h3>
            </div>
            <div className="card-body">
              <img
                src="/img/logo.jpg"
                alt="logo"
                className="card-img-top mx-auto m-2 rounded-circle w-50"
              />
              <form onSubmit= {handleSubmit(onsubmit)}>
                <div className="form-group">
                  <input
                    type="text"
                    name="nombreus"
                    placeholder="Usuario"
                    className="form-control"
                    {...register("nombreus") }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="clave"
                    placeholder="contraseña"
                    className="form-control"
                    {...register("clave")}
                  />
                </div>
                <div className="form-group">
                  <button  className= "btn  btn-success btn-block" >
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  ); 
};

export default Signin;

