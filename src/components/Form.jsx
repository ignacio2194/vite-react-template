import React from "react";

function Form() {
  return (
    <div>
      <h2 className="title_Form">
        <span> registrate pa los compas </span>
      </h2>
      <form className="login_Form">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="user"
          //   onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="email"
          //   onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="contraseña "
        />
        <div className="btn-form">
          <button className="btnSubmit" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
