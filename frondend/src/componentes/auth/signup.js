import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "./useAuth";
// import { ingresar } from "../servicioPet";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const { login } = useAuth();
  
  const onSubmit = async (data) => {
    const credenciales = {
      nombre: data.nombre,
      nombreus: data.nombreus,
      clave: data.clave,
    };

    const res = await axios.post("http://localhost:5000/registrarse", credenciales);

    if ((res.data.auth = "true")) {
      
      login(credenciales.nombre, res.data.token); 
    
      toast.success("usuario registrado sastifactoriamente");
      
      history.push("/profile");
    } else {
      toast.error("Usuario o Clave Incorrecta");
    }
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center">
            <div className="card-header">
              <h3>Registrarse</h3>
            </div>
            <div className="card-body">
              <img
                src="/img/logo.jpg"
                alt="logo"
                className="card-img-top mx-auto m-2 rounded-circle w-50"
              />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo del Usuario"
                    className="form-control"
                    {...register("nombre")}
               
                    autofocus
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="nombreus"
                    placeholder="Usuario"
                    className="form-control"
                    {...register("nombreus")}
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
                  <button className="btn  btn-success btn-block">
                    Registrarse
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

export default Signup;
