import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="signUpDiv">
        <div className="signUpDivCenter">
          <div className="signUpBox">
            <div className="signUpBoxContent">
              <div className="signUpHeader">
                <img src="/images/logo.png"></img>
              </div>
            </div>
            <div className="signUpandSignin">
              <div className="signUpForm">
                <h1 className="signUpTitle">Sign in</h1>
                <input
                  className="signUpInput"
                  placeholder="Username/Email"
                ></input>
                <input
                  className="signUpInput"
                  placeholder="Password"
                ></input>
              </div>

              <div className="signUpForm">
                <h1 className="signUpTitle">Sign up</h1>
                <input className="signUpInput" placeholder="Name"></input>
                <input className="signUpInput" placeholder="Username"></input>
                <input
                  className="signUpInput"
                  placeholder="Email address"
                ></input>
                <input className="signUpInput" placeholder="Password"></input>
                <input
                  className="signUpInput"
                  placeholder="Confirm password"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup