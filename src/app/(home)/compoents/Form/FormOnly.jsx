"use client";
import React, { useState } from "react";
import Input from "../Input/Input";
import formStyle from "../Form/Form.module.css";
import Button from "../Button/Button";
import axios from "axios";
import Link from "next/link";
import { FaCheckCircle, FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tyent.co.in'; // Fallback URL
import { Spinner } from "react-bootstrap";
import { toast } from "sonner";
 


const ACCESS_TOKEN =
    "EAAU9dqi5jOQBOzzAoR5bx2HCz3lDO12uH3aoys4sIlEZA20HmKBXhUZB5mwoLZBb4RruHZB7q2D756XnjG8kRB3IjBXp0cf6IjPd9sNuefAZBAp5Fkf3BwOwHEUUlKklWsxN0YXB5fAV6J7qvhFfO0FNNuCzQbjSZAYnbJVwr3FGbtK37VZC4WweBzpe7ZCrlW04"
  
const FormOnly = () => {

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
    
      const [loading, setLoading] = useState(true);
      const [loadingData, setLoadingData] = useState(false);
    
      const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...inputdata, [name]: value });
      };
    
      const validateForm = () => {
        const { name, email, number, location, message } = inputdata;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const numberRegex = /^\d{10}$/;
    
        let isValid = true;
        let errors = {};
    
        if (!name.trim()) {
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
        if (!location.trim()) {
          errors.location = "Location is required";
          isValid = false;
        }
        if (!message.trim()) {
          errors.message = "Message is required";
          isValid = false;
        }
    
        setError(errors);
        return isValid;
      };
    
      const handleSubmit = async(e) => {
    
        e.preventDefault();
        setLoadingData(true);
        
        if (validateForm()) {
          setLoading(true);
        
          try {
            const payload = {
              messaging_product: "whatsapp",
              recipient_type: "individual",
              to: "919182414181", // Ensure the number is in the correct format and opted in.
              type: "template",
              template: {
                name: "appointment_custom_messages", // Confirm this matches the approved template name.
                language: {
                  code: "en" // Verify that the language code matches your template configuration (e.g., "en" vs. "en_US").
                },
                components: [
                  {
                    type: "body",
                    parameters: [
                      {
                        type: "text",
                        text: inputdata.name
                      },
                      {
                        type: "text",
                        text: `${inputdata.number},Email: ${inputdata.email}`
                      },
                      {
                        type: "text",
                        text: `${inputdata.message},Location: ${inputdata.location}`
                      }
                    ]
                  }
                ]
              }
            }; 

            await axios.post(
              `/api/lead`,
              {
                name: inputdata.name,
                email: inputdata.email,
                number: inputdata.number,
                location: inputdata.location,
                message: inputdata.message,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );


             const res = await axios.post(
              "https://graph.facebook.com/v19.0/209988965541805/messages",
              payload,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
              }
            );
            if(res.status === 200){
              setLoading(false);
            }
            
          } catch (error) {
            toast.error("Error sending message:", error.message);
          
          }finally {
            setLoading(false);
            setLoadingData(false);
            
          }
          
        }
      };
    
  return (
    <div>
        <div  data-aos="fade-left" className="flex-column justify-content-center align-items-center">
        {loading ? (<>
          <h3 data-aos="fade-up" className={formStyle.heading}>Fill Out the Form – We'll Get in Touch</h3>
          <h5 data-aos="fade-up" >Start Your Journey Today!</h5>
          <br/>
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between">
              <div data-aos="fade-right" style={{ flex: "0 0 48%" }}>
                <Input
                  type="text"
                  name="name"
                  label="Name"
                  value={inputdata.name}
                  placeholder="Full Name"
                  onChange={inputHandler}
                />
                {error.name && <div style={{ color: "red", fontSize: "0.9em" }}>{error.name}</div>}
              </div>
              <div data-aos="fade-right" style={{ flex: "0 0 48%" }}>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  value={inputdata.email}
                  placeholder="Email"
                  onChange={inputHandler}
                />
                {error.email && <div style={{ color: "red", fontSize: "0.9em" }}>{error.email}</div>}
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-between">
              <div data-aos="fade-right" style={{ flex: "0 0 48%" }}>
                <Input
                  type="text"
                  name="number"
                  label="Number"
                  value={inputdata.number}
                  placeholder="Number"
                  onChange={inputHandler}
                />
                {error.number && <div style={{ color: "red", fontSize: "0.9em" }}>{error.number}</div>}
              </div>
              <div data-aos="fade-right" style={{ flex: "0 0 48%" }}>
                <Input
                  type="text"
                  name="location"
                  label="Location"
                  value={inputdata.location}
                  placeholder="Location"
                  onChange={inputHandler}
                />
                {error.location && <div style={{ color: "red", fontSize: "0.9em" }}>{error.location}</div>}
              </div>
            </div>
            <br />
            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea data-aos="fade-right"
                id="message"
                name="message"
                className={`${formStyle.textarea} form-control`}
                value={inputdata.message}
                onChange={inputHandler}
                placeholder="Include a message..."
              />
              {error.message && <div style={{ color: "red", fontSize: "0.9em" }}>{error.message}</div>}
            </div>
            <br />
            <Button type="submit"  data-aos="fade-right" 
             name= {loadingData ? (<> <Spinner  size="sm" />&nbsp;&nbsp;{"A healthier life is just one click away"} </>) : ("A healthier life is just one click away")}/>
 
          </form>
        
        </>) :(<>
        
          <div className="d-flex justify-content-center align-items-center boarder border border-secondary rounded p-3">
              <br />
              <div>
                <center>
                  <FaCheckCircle
                    style={{
                      color: "#008AC7",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                    size={80}
                  />
                </center>
                <br />
                <h2 style={{ textAlign: "center" }}>
                  Thank you for contacting us!
                </h2>
                <p style={{ color: "#969293", textAlign: "center" }}>
                  we have received your message.
                </p>
                <p style={{ color: "#969293", textAlign: "center" }}>
                  we'll reach you out immedately!
                </p>
                <br />
                <br />
                <center>
                  Let's connect!
                  <br/>
                  <br/>
                  <div className="d-flex justify-content-around align-items-center icons">
                
                  <div>
                    <Link href={"https://www.facebook.com/TyentIndiaOfficial/"}  target="_blank" style={{textDecoration:'none', color:"#969293"}}>
                    <FaFacebook size={30} />
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.instagram.com/tyentindia/"} target="_blank" style={{textDecoration:'none', color:"#969293"}}>
                    <IoLogoInstagram size={30} />
                    </Link>
                  </div>
                 
                  <div>
                    <Link href={"https://www.linkedin.com/company/tyent-india1/posts/?feedView=all"} target="_blank" style={{textDecoration:'none', color:"#969293"}}>
                    <FaLinkedinIn  size={30}/>
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.youtube.com/@TyentIndia3170"} target="_blank" style={{textDecoration:'none', color:"#969293"}}>
                    <FaYoutube  size={30}/>
                    </Link>
                  </div>
                </div>

                </center>
                <br />
                <br />
              </div>
            </div>
        
        </>)
         
        }
        </div>
    </div>
  )
}

export default FormOnly