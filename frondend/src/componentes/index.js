import React from 'react';
import { Link } from 'react-router-dom'

const Index = () => {

    return (
        <main className="index">
        <header className="masthead d-flex">
          <div className="container text-center my-auto">
            <h1 className="mb-1">Enlaces</h1>
            <h3 className="mb-5">
              <em>Guarda tus favoritos</em>
            </h3>
            <Link to="/signin" className="btn btn-primary" >
              Empecemos
            </Link>
          </div>
        </header>
      </main>

    )
};

export default Index;
