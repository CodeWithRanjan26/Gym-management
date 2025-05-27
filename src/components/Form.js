import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        {isSignup ? (
          <>
            <p className="title">Register</p>
            <p className="message">Signup now and get full access to our app.</p>
            <form className="form">
              <div className="flex">
                <label>
                  <input className="input" type="text" placeholder="First name" />
                  
                </label>
                <label>
                  <input className="input" type="text"placeholder="last name" />
                 
                </label>
              </div>
              <label>
                <input className="input" type="email" placeholder="Email" />
                {/* <span>Email</span> */}
              </label>
              <label>
                <input className="input" type="" placeholder="Contact" />
                {/* <span>Email</span> */}
              </label>
              <label>
                <input className="input" type="password" placeholder= "password" />
                
              </label>
              <label>
                <input className="input" type="password" placeholder= "Confirm password" />
                
              </label>
              <button className="submit">Submit</button>
              <p className="signin">Already have an account? <span className="toggle" onClick={toggleForm}>Signin</span></p>
            </form>
          </>
        ) : (
          <>
            <p className="title">Welcome back</p>
            <form className="form">
              <input type="email" className="input" placeholder="Email / Contact" />
              <input type="password" className="input" placeholder="Password" />
              <p className="page-link">
                <span className="page-link-label">Forgot Password?</span>
              </p>
              <button className="form-btn">Log in</button>
            </form>
            <p className="sign-up-label">
              Don't have an account? <span className="toggle" onClick={toggleForm}>Sign up</span>
            </p>
          </>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;

  .form-container {
    width: 350px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    padding: 20px 30px;
  }
  .title {
    text-align: center;
    font-size: 28px;
    font-weight: 800;
  }
  .input {
    width: 100%;
    border-radius: 20px;
    border: 1px solid #c0c0c0;
    padding: 12px 15px;
    margin-bottom: 10px;
  }
  .form-btn, .submit {
    width: 100%;
    padding: 10px 15px;
    background: teal;
    color: white;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
  .toggle {
    color: teal;
    cursor: pointer;
    font-weight: bold;
  }
`;


export default Form;
