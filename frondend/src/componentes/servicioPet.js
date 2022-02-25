import axios from "axios";

export const ingresar = async() =>{
   console.log("ingresar backend")
    return await axios.post("http://localhost:5000/ingresar");
}