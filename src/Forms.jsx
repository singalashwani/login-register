import React, {useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Register from "./Register";

let Forms = () => {
    
    let [showComponent, setShowComponent] = useState({
        login: false,
        register: true,
        text: 'Login'
    });
    const [formState, setFormState] = useState(false);

    let updateForm = () => {
        setShowComponent({
            login: !showComponent.login,
            register: !showComponent.register,
            text: showComponent.text === 'Login' ? 'Register' : 'Login'
        });
        setFormState(true);
    }

  return (
    <>
      <div className="container-fluid">
        <div className="row forms">
          <div className="col-md-6 left"></div>
          <div className="col-md-6 right">
            <div className="rightSection">
              {showComponent.login && !showComponent.register && <Login form={showComponent} updateForm={updateForm} formState={formState} />}
              {!showComponent.login && showComponent.register && <Register form={showComponent} updateForm={updateForm} formState={formState} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
