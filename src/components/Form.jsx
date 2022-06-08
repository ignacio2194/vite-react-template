import React, { useState } from "react";

function Form() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error,setError] = useState(null)
  // estado para guardar todos los datos del usuario. 
  const [datos, setDatos] = useState([]);

  const guardarDatos = (e) => {
  const  exprRegPass =/^(?=.*\d).{4,8}$/
  const expreRegEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,63}$/i
    e.preventDefault();

    if (!nombre.trim()|| nombre.length<3) {
     setError("campo vacio o nombre no valido ");

      return;
    }
    if (!email.trim()||expreRegEmail.test(email) === false ) {
      setError("campo vacio o email no valido ");
      return;
    }
    if (!contraseña.trim()|| exprRegPass.test(contraseña) === false) {
      setError("contraseña muy corta como la tuya o campo vacio ");
      return;
    }
    setDatos([
      ...datos,
      {
       name:nombre,
       Email:email,
       pass:contraseña
      }
    ]);

    e.target.reset();
    setNombre("");
    setEmail("");
    setContraseña("");
    setError(null)
  };

  return (
    <div>
      <h2 className="title_Form">
        <span> registrate</span>
      </h2>
      <form className="login_Form" onSubmit={guardarDatos}>
      {
          
          error?<span className=" error">{error}</span>: null
        
       }
        <input
          type="text"
          className="form-control mb-2"
          placeholder="user"
          onChange={(e) => setNombre(e.target.value)}
      
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="contraseña "
          onChange={(e) => setContraseña(e.target.value)}
        />
        <div className="btn-form">
          <button className="btnSubmit" type="submit" >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
