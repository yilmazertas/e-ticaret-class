//// contact us kısmı burada yazılır
import React, { useRef } from 'react';
import styles from "./Contact.module.scss"
import Card from '../../components/card/Card'
import {  FaEnvelope, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import {GoLocation} from "react-icons/go"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(process.env.REACT_APP_EMAILJS_ID, 'template_pq0zz0n', form.current, '4usC_RDhXVAqyBDf0')
    .then((result) => {
        toast.success("Message send successfully");
    }, (error) => {
        toast.error(error.text);
    });
   e.target.reset()
  }




  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact us</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name:</label>
              <input type="text" name="user_name" placeholder="Full Name" required/>
              <label>Email:</label>
              <input type="email" name="user_email" placeholder="Your active Email" required/>
              <label>Subject:</label>
              <input type="text" name="subject" placeholder="Subject" required/>
              <label>Your Message:</label>
              <textarea name="message" cols="30" rows="10" required/>
              <button className="--btn --btn-primary">Send Message</button>
            </Card>
          </form>
          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt/>
                  <p>+90 111 111 11 11</p>
                </span>
                <span>
                  <FaEnvelope/>
                  <p>Support@eshop.com</p>
                </span>
                 <GoLocation/>
                 <p>Izmir,Turkey</p>
                 <span>
                  <FaTwitter/>
                  <p>@yılmazertaş</p>
                 </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact