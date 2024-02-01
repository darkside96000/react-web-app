import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div >
            <h3>Ready to get started?</h3>
            <h3 className="aa" >Talk to us today</h3>
          </div>
           <div className="contact-short-btn">
            <NavLink to="/contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>


      <footer>
        <dive className="container grid grid-four-column">
          <div className="footer-social">
            <h3>Follows Us:</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://instagram.com/darkside96000?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
                  target="_blank">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/sonu-roy-4a8b98215"
                  target="_blank">
                  <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FSonuRoy96000"
                  target="_blank">
                  <FaTwitter className="icons" />
                </a>
              </div>
              <div>
                <a href="https://github.com/skirr96000"
                  target="_blank">
                  <FaGithub className="icons" />
                </a>
              </div>
            </div>
          </div>
          
        </dive>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Darkside96000 : All Rights Reserved<br/>
              PRIVACY POLICY<br/></p>
            
          </div>
        </div>
        
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.contact-short {
  max-width: 70vw;
  margin: auto;
  padding-left: 15px;
  padding-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(30%);
  .aa{
    margin-top:-18px;
  }
}


footer {
  padding: 5px 0 5px 0;
  background-color: ${({ theme }) => theme.colors.footer_bg};

  h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 15px;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    
  }
  .footer-social--icons {
    display: flex;
    gap: 20px;

    div {
      padding: 5px;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};

      .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.5rem;
        position: relative;
        cursor: pointer;
        &:hover { background-color: lightblue; }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 5px;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .contact-short {
    max-width: 95vw;
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;

   
  }

  footer .footer-bottom--section {
    padding-top: -1px;
    .container grid grid-two-column{
      padding:-4px;
    }
  }
}
`;

export default Footer;
