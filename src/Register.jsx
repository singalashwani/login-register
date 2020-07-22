import React from "react";

let Register = (props) => {

    let {text} = props.form;

    let updateForm = () => {
        props.updateForm();
    };

  return (
    <>
      <form className={props.formState ? 'myAnimation' : ""}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            id="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            autoComplete="off"
            id="email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            autoComplete="off"
            id="password"
            name="password"
          />
        </div>
        <div className="submitbtn">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        <div className="txt" onClick={updateForm}>{text}</div>
      </form>
    </>
  );
};

export default Register;
