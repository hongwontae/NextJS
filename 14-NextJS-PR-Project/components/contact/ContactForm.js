import { useState } from "react";
import classes from "./Contact.module.css";

function ContactForm() {
  const [data, setData] = useState({
    email: "",
    name: "",
    message: "",
  });

  async function sendMessageHandler(e) {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();

  }

  return (
    <>
      <section className={classes.contact}>
        <h1>How can I help you</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={data.email}
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      email: e.target.value,
                    };
                  });
                }}
              ></input>
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      name: e.target.value,
                    };
                  });
                }}
              ></input>
            </div>
            <div className={classes.control}>
              <label htmlFor="message">Your Message</label>
              <textarea
                rows={5}
                id="message"
                value={data.message}
                onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      message: e.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>
            <div className={classes.actions}>
              <button>Send Message</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default ContactForm;
