import React from "react";
import "../assets/css/Form.css";
import Heading from "./Heading";
import Button from "./Button";

const Form = () => {
  return (
    <section className="section-form">
      <Heading
        text="For more enquiries or Information,
              Please leave us a message"
        fontSize="4.8rem"
        lineHeight="6rem"
      />

      <div className="form-container">
        <form action="" className="form grid grid--2-cols">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Adekola Ibrahim"
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id=""
              placeholder="+234 90 9999 9999"
            />
          </div>
          <div className="input-group">
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="" placeholder="Adkol Inc." />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="AdekolaIbrahim@podlly.io"
            />
          </div>
          <div className="input-group textarea">
            <label htmlFor="note">How can we help</label>
            <textarea
              type="text"
              name="note"
              id=""
              placeholder="How can we help?"
            />
          </div>
        </form>
        <Button text="Send Mail" />
      </div>
    </section>
  );
};

export default Form;
