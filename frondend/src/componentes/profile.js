import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../componentes/auth/useAuth";

const Profile = () => {

  const { user } = useAuth();
  
  return (

   <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <h2>
                H O L A 
              </h2>
              <h4>
              {user}
              </h4>
              <Link to = "enlaces/list" className="btn btn-primary m-4">
                Almacena tus Enlaces Favoritos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Profile;