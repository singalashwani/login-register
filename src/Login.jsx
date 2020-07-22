import React from "react";

let Login = (props) => {

    let {text} = props.form;

    let updateForm = () => {
        props.updateForm();
    };

  return (
    <>
      <form className={props.formState ? 'myAnimation' : ""}>
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
            Login
          </button>
        </div>
        <div className="txt" onClick={updateForm}>{text}</div>
      </form>
    </>
  );
};

export default Login;
