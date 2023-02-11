import { useEffect, useRef, useState } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

const ContactForm = () => {
  const enteredEmail = useRef();
  const enteredName = useRef();
  const enteredMessage = useRef();
  const [requestStatus, setRequestStatus] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    setRequestStatus("pending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail.current.value,
          name: enteredName.current.value,
          message: enteredMessage.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setRequestStatus("success");
      enteredEmail.current.value = "";
      enteredName.current.value = "";
      enteredMessage.current.value = "";
    } catch (error) {
      setError(error.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Message send successfully!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: error,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={enteredEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="name" id="name" required ref={enteredName} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows="4"
            required
            ref={enteredMessage}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
