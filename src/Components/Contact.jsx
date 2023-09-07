import React from 'react';
import styled from 'styled-components';


const Contact = () => {
  const Wrapper =styled.section`
  content-justify:center;
  text-align:center;
  padding: 2rem 0 4rem 0;

  .container {
    margin-top: 2rem;
    text-align: center;
    padding:4px;
    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 15px;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: pink;
            border: 2px solid ${({ theme }) => theme.colors.btn};
            color: red;
            transform: scale(0.9);
          }
        }
      }
    }

  }
  `;
   
  return (
    <Wrapper>
    <h2 className='common-heading'> Feel free to contact us!!! </h2>

    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262431.27366210823!2d75.587
        25403860458!3d26.88754032651465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0
        x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v16
        94012959598!5m2!1sen!2sin"
     width="100%" 
     height="450" 
     style={{border:0 }}
     allowFullScreen="" 
     loading="lazy" 
     referrerpolicy="no-referrer-when-downgrade">

     </iframe>
     <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xdorzppj"
            method="POST"
            className="contact-inputs">

            <input
            
              type="text"
              name="username"
              placeholder="Enter your username"
              autoComplete="off"
              required
            />

            <input 
              type="email"
              name="Email"
              placeholder="Enter your Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required= "true">

              </textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;