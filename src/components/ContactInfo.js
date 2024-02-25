import React, { useState } from "react";

import { ContactData } from "../ContactData.js";

//styles
import Logo from "../assets/logo/5.png";
import "../styles/components/ContactInfo.css";
import { Button } from "./Button.js";

export default function ContactInfo() {
  const [data, setData] = useState(ContactData);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with form data, like submitting to a server
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {data.map((data) => {
        return (
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form">
              <div className="form_top">
                <img src={Logo} />
                <h3>{data.name}</h3>
                <h5>{data.phone}</h5>
              </div>
              <div className="form_mid">
                <input
                  className="input-field"
                  type="name"
                  name="name"
                  placeholder="Your name..."
                />
                <input
                  className="input-field"
                  type="email"
                  name="email"
                  placeholder="Your email..."
                />
                <input
                  className="input-field"
                  type="number"
                  name="number"
                  placeholder="+1 (721) 123 4567"
                />
                <textarea
                  className="input-field"
                  name="message"
                  placeholder="I'm interested in this property..."
                />
              </div>
              <div button-container>
                <Button className="form_btn_email">Send Email</Button>
                <Button className="form_btn_call">Call</Button>
              </div>
            </div>
          </form>
        );
      })}
    </>
  );
}
