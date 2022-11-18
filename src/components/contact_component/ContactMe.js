import React from "react";
import "./contactMe.css";
import Button from "../buttons_component/Button";
const ContactMe = () => {
  const sendMessage = (event) => {
    event.preventDefault();
    console.log("hello duncan");
  };
  return (
    <div className='container-fluid contactBackground'>
      <div className='container row'>
        <div className='col-md-6 bg-light'>
          <form onSubmit={sendMessage}>
            <div className='row'>
              <div className='col'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='First name'
                  aria-label='First name'
                />
              </div>
              <div className='col'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Last name'
                  aria-label='Last name'
                />
              </div>
            </div>
            <div>
              <input
                type='text'
                className='form-control'
                placeholder='Last name'
                aria-label='Last name'
              />
            </div>
            <div>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                placeholder='message'
                rows='3'
              ></textarea>
            </div>
            <Button type='submit' btnName={"submit"}></Button>
          </form>
        </div>
        <div className='col-md-6 '></div>
      </div>
    </div>
  );
};
export default ContactMe;
