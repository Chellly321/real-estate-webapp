import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ContactData } from "./ContactData.js";

//styles
import Logo from "../assets/logo/5.png";
import "../styles/components/ContactInfo.css";
import { Button } from "./Button.js";
import { housesData } from "../data.js";

export default function ContactInfo() {
  const [data, setData] = useState(ContactData);
  const { id } = useParams();
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    messageInfo: `${house.address}`,
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
      messageInfo: `${house.address}`,
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
                  type="message"
                  name="message"
                  placeholder="I'm interested in this property... "
                />
              </div>
              <div className="button-container">
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
