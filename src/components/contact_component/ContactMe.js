import React from "react";
import "./contactMe.css";
import Button from "../buttons_component/Button";
import { useForm } from "react-hook-form";
const ContactMe = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendMessage = (event) => {
    console.log(event.target);
  };
  return (
    <>
      <div className='container-fluid bg-light'>
        <div className='container row mx-auto'>
          <div className='col-12 col-md-7  bg-light d-flex align-items-center justify-content-center gx-0'>
            <div className='shadow rounded p-4 '>
              <h3>Get in touch</h3>
              <form onSubmit={handleSubmit(sendMessage)}>
                <div className='row mb-3'>
                  <div className='col'>
                    <input
                      type='text'
                      name='firstName'
                      className='form-control'
                      placeholder='First name'
                      aria-label='First name'
                      {...register("firstName", { required: true })}
                    />
                    <error className='text-danger error'>
                      {errors.firstName?.type === "required" &&
                        "first name is required"}
                    </error>
                  </div>
                  <div className='col'>
                    <input
                      type='text'
                      name='lastName'
                      className='form-control'
                      placeholder='Last name'
                      aria-label='Last name'
                      {...register("lastName", { required: true })}
                    />
                    <error className='text-danger error'>
                      {errors.lastName?.type === "required" &&
                        "last name is required"}
                    </error>
                  </div>
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    name='subject'
                    className='form-control'
                    placeholder='Subject'
                    aria-label='Subject'
                    {...register("subject", { required: true })}
                  />
                  <error className='text-danger error'>
                    {errors.subject?.type === "required" &&
                      "subject is required"}
                  </error>
                </div>
                <div className='mb-3'>
                  <textarea
                    name='message'
                    class='form-control'
                    id='exampleFormControlTextarea1'
                    placeholder='message'
                    rows='3'
                    {...register("message", { required: true })}
                  ></textarea>
                  <error className='text-danger error'>
                    {errors.message?.type === "required" &&
                      "message is required"}
                  </error>
                </div>
                <Button type='submit' btnName={"submit"}></Button>
              </form>
            </div>
          </div>
          <div className='col-md-5 col-12 d-flex align-items-stretch  contact_me contactBackground'>
            <div className='container py-5 '>
              <h3>Contact me</h3>
              <div>
                <div className='mb-3'>
                  <i
                    class='fa fa-map-marker fs-3 orange'
                    aria-hidden='true'
                  ></i>
                  <span>
                    {" "}
                    <strong>Address:</strong> Nairobi, Kenya
                  </span>
                </div>
                <div className='mb-3'>
                  <i class='fa fa-phone fs-3 orange' aria-hidden='true'></i>
                  <span>
                    {" "}
                    <strong>Phone</strong>: +254715691186
                  </span>
                </div>
                <div className='mb-3'>
                  <i class='fa fa-envelope fs-3 orange' aria-hidden='true'></i>
                  <span>
                    {" "}
                    <strong> Email:</strong> duncan.moiyo@gmail.com
                  </span>
                </div>
                <div className='mb-3'>
                  <i class='fa fa-github fs-3 orange' aria-hidden='true'></i>
                  <span>
                    <strong> Github:</strong>{" "}
                  </span>
                </div>
                <div className='mb-3'>
                  <i
                    class='fa fa-linkedin-square fs-3 orange'
                    aria-hidden='true'
                  ></i>

                  <span>
                    <strong> LinkedIn:</strong>
                    <a
                      href='https://www.linkedin.com/in/duncan-moiyo-28a539243/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Duncan Moiyo
                    </a>
                  </span>
                </div>
                <div className='mb-3'>
                  <i
                    class='fa fa-twitter-square fs-3 orange'
                    aria-hidden='true'
                  ></i>
                  <span>
                    {" "}
                    <strong>Twitter:</strong> @duncan_sareto
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid d-flex justify-content-center mt-3 contactBackground'>
        <h5 className='orange'>&copy; Duncan Moiyo</h5>
      </div>
    </>
  );
};
export default ContactMe;
