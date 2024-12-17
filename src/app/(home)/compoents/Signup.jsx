"use client"
import React, { useState } from 'react'
import Input from './Input/Input'
import Button from './Button/Button'

const Signup = () => {

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful! You can now log in.");
      } else {
        alert(data.error || "Signup failed.");
      }
    } catch (err) {
      alert("An error occurred. Please try again later.");
    }

  }
  return (
    <div>
       <h1>SignUp</h1>

       <form onSubmit={handleSubmit}>
       <Input  type="name" name="name" label="Name" placeholder="Name"  value={form.name} onChange={handleChange} />

       <Input  type="email" name="email" label="Email" value={form.email} onChange={handleChange} placeholder="example@gmail.com"/>

       <Input  type="password" name="password" label="password" placeholder="password" value={form.password}  onChange={handleChange}/>
         <br/>
       <Button type="submit"  name="Sign Up" />
       </form>
    </div>
  )
}

export default Signup
