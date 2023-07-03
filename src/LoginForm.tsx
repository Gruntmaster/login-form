import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div className="Login">
        <form>
          <div className="LoginBox">
            <div className="LoginHeader">Login </div>
            <div className="Inputs">
              <input
                id="login"
                className="Email"
                placeholder="Enter your Email"
              />
              <input
                id="pass"
                className="Password"
                placeholder="Enter your Password"
                type="'Password'"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="SubmitButton"
                placeholder="Login"
                onClick={(e) => {
                  e.preventDefault();
                  this.setCode();
                }}
              >
                button
              </button>
            </div>
          </div>
          <p id="answer"></p>
        </form>
      </div>
    );
  }

  setCode = () => {
    let lStr: string = (document.getElementById("login") as HTMLInputElement)
      .value;
    let PassStr: string = (document.getElementById("pass") as HTMLInputElement)
      .value;

    fetch(`https://192.168.1.3:7080/Login?login=${lStr}&pass=${PassStr}`)
      .then((v) => v.text())
      .then(
        (v) =>
          ((document.getElementById("answer") as HTMLInputElement).innerHTML =
            v)
      );
  };
}

export default LoginForm;
