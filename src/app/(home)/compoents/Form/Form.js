"use client"
import React, { useState } from 'react'
import Input from '../Input/Input';
import  formStyle from '../Form/Form.module.css'
import Button from '../Button/Button';
import contact from "@/asserts/contactlady.png"
import Image from "next/image";
import style from "../../compoents/Form/Form.module.css"


const Form = () => {
  const [inputdata, setInput] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    message: ""
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    message: ""
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...inputdata, [name]: value });
  };

  const validateForm = () => {
    const { name, email, number, location, message } = inputdata; // Corrected variable name here
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numberRegex = /^\d{10}$/;

    let isValid = true;
    let errors = {};

    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!email || !emailRegex.test(email)) {
      errors.email = "Invalid email";
      isValid = false;
    }
    if (!number || !numberRegex.test(number)) {
      errors.number = "Invalid number";
      isValid = false;
    }
    if (!location) {
      errors.location = "Location is required";
      isValid = false;
    }
    if (!message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    console.log("Form submitted");
    e.preventDefault();
    console.log("Form submitted");
    if (validateForm()) {
      console.log("Form submitted");
      console.log(inputdata);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <div className={style.card}>
              <Image className={style.conimg} src={contact} alt="contact image" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            </div>
          </div>
        </div>
        <div className="col-md-6 justify-content-center align-items-center">
          <div>
            <h1 className={formStyle.heading}>Fill the form - We will get in touch</h1>
            <br />
            <div className='d-flex justify-content-between align-items-center'>
              <div style={{ flexGrow: 1 }}>
                <Input  
                  type="text"
                  name="name"
                  label="Name"
                  value={inputdata.name}
                  placeholder="Full Name"
                  onChange={inputHandler}
                />
                {error.name && <div style={{ color: 'red' }}>{error.name}</div>}
              </div>
              <div style={{ flexGrow: 1 }}>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  value={inputdata.email}
                  placeholder="Email"
                  onChange={inputHandler}
                />
                {error.email && <div style={{ color: 'red' }}>{error.email}</div>}
              </div>
            </div>
            <br />
            <div className='d-flex justify-content-evenly align-items-center'>
              <div style={{ flexGrow: 1 }}>
                <Input
                  type="text"
                  name="number"
                  label="Number"
                  value={inputdata.number}
                  placeholder="Number"
                  onChange={inputHandler}
                />
                {error.number && <div style={{ color: 'red' }}>{error.number}</div>}
              </div>
              <div style={{ flexGrow: 1 }}>
                <Input
                  type="text"
                  name="location"
                  label="Location"
                  value={inputdata.location}
                  placeholder="Location"
                  onChange={inputHandler}
                />
                {error.location && <div style={{ color: 'red' }}>{error.location}</div>}
              </div>
            </div>
            <br />
            <label style={{ marginBottom: '5px' }} htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={formStyle.textarea}
              value={inputdata.message}
              onChange={inputHandler}
              placeholder="Include a message..."
            />
            {error.message && <div style={{ color: 'red' }}>{error.message}</div>}
            <br />
            <Button type="submit" onClick={handleSubmit} name="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Form;