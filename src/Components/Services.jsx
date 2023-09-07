import React from 'react'
import Styled, { styled } from 'styled-components';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Services = () => {
  return (
    <Wrapper>
      <div>
        <h2>You Can also visit my linktree:</h2>
        <div >
          <a
            href="https://linktr.ee/darkside96000"
            target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCuhbCWiDC7NBJI19SN_X-H_XzJdbK2YES04_Q-kfDQ&s" alt="hoii"></img>
          </a>
        </div>
        <div>
          <h2>
            follow me on insta:
          </h2>
            <a
              href="https://instagram.com/darkside96000?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
              target="_blank">
              <img src="data:image/jpeg;base64,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" alt="hii"></img>
            </a>
        </div>
        <div>
          <h2>
            follow me on Twitter:
          </h2>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FSonuRoy96000"
              target="_blank">
              <img src="data:image/png;base64,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" alt="hii"></img>
            </a>
        </div>
        <div>
          <h2>
            Also Visit My Linkdin Profile:
          </h2>
          <a href="https://www.linkedin.com/in/sonu-roy-4a8b98215"
            target="_blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAYFBMVEUAfrv///8Ad7gAdLYAebn2+vyqyuLW4+8AbrMAfLoAgr3G3OvK3u2oxN6OuNgAcra+1uh5q9FcncpGk8UnicHt9PmewNy10OWCsdRlpM44h78kgLzf6vNXl8fl7/ZnoMxqMWeLAAAFgUlEQVR4nM2ch9KiMBCAQxJKlKMoQQXR93/Lo1ggyYbi5tedubmZA81nyvYc8baIDLMgyQ/HYkcI2RXHQ54EWSg3fRdZP3hwqWpBKedCCNJJ+zfnlIq6ugTrMdYRyOBeUcYfI6vSgjBa3YN1ECsIZNkwBgw+5mDpsVwBsZTAPzURnR39CUGj5uSjEtzKmvKFww/CaV3e0AjkuWZLf/54NerzksWYJ/CTlK8fv2fgaTK/FrMEJaWbhh+E0nKOYYYgrhZvP2AeaBF/QCDzDeuvMbDcuh1sBHvyyQK8hZL9NoJzhDJ+J9F5A8G1wZmAQWhzXUsQ1+s00JzwGtqQAMEJbwWeEp3WECQpOgAhabKcIMfcAm+h+VKCnDkBIISZEAwEuYslGCQ1IOgEzmagE8MsaASJmz3wFKptR5XgpC2BaJ1Q+qF9GkmqHkqFIFb1AE+bMttn/w4ploaKYhvBtZ6+PbJrN7T9UV8tBI3yQ3kwXiAEU91/aQMTnJVdyKZrFiBtUnqGCPbKJmDqvk2QFiLamwmk+mKtAHh+hXUkpJFAtQa8VAnQlMXYQrwJYnWKqe5U3LAUNot1Ar9QZ5hpAJ6/Q1oGUfgaQalOsDAYLf+ItRFoqRL4mt51SyCorxAY9hh1uAojE/UgkIYtxgw7EdF9TOWE4GywOw5PY//15zHBrTbNbq0GnbLCAyCivo0ISqO61bUyqvfCyjeBb5wC3TLh+m9imOOe4AT8NjGxzgGSdX4JPb0IVLfgjcDuzwNxvaN7sIOj0BFIyxnjrPfSyobhxpG9RPJBoCnkiQjKUobnqY6lV80dQePk6xeIaAYC6TJEsQuTPQHyISOdURv+zBMEPcEddREET1OxKwrCIjabhxT3jsCiavtoaSSj4wA84fSYZzfp+76U1+BSzZwgUcmWIARPAj8kU8lf30fVJ2L4/YdwYktk1tjngYYtAbwN2Fgj9lrp9WqkPAk7tvQYepqEhW2btUMQ7wJOlEYQvgkUsxlzw+sPSSzKhF9aAjgGWEUgBJi2zOCVEJVHJGAXVxJQMFvXyh5cCFFLEsJTtIYgymAAyP/oEUKSwUZhBUGme3QTAa0vzYglIF5BMFfQuUI6kgYkgXXGCoJZURMDT+EJyf+G4AoMw3NyQNmJ8wJYH3EgljgMlQBQveJItJDZEQHgCoqC7ECALQR+GEK1byDktIy/nkCWBaOcssJY4btvcHVXEmTPyqBglUE/WI49EkEWvadZEH0pQNWHtQ/CyV7nB40ACMx2aGdBcfmZZirNBqg9C0j6IFZTgReVYG8mOGLpRDWwF1o6FCA4YNkFbTGF6jOaCVq7gGMbfa0/hasuC0CQIPkHuumjai3FTND6Bzg+UqgTqB8GCDIsP1En+LeIoPUTkXzljQSdr4wVL2wkqDBjpi0Efcy0Im7EJ+jjRjh2/gOCPnaG8wfuCYb8AZxD+QOCuz2P5J7gkUcCc2l/QCDt+UTnBM98IphTdU7wyqlCeWXnBK+8MhTduyZ459YhN9Y1wai+ANRYHBOMayxQncktwbjOBNTa3BJMa23GeqNjgmm90VhzdUyg1FyNpUSnBGrd2VB7d0ug195Nqtklgd5/YOjBcEkgite/W/pQXBKY+lAMnZnuCMy9OHo/ksM5MPcj6T1ZavA5U+WZEqgfHr0C9WRp6WexU0WAj1QAIgj4YbgvTXMU9PYc6JHBrIAftvXmaf2JTsTan6j3aOKLvUfT1KeKLHN9qj/Qq/sD/co/0LP9A33rcGHsQ1neu/8D9xd+4A7HD9xj+YG7PN737zN5P3Cn6wfutbUSF9+929dJyb97v9Eb7nhu/P04dz
            y9799z7eTbd307+fZ9516+fOf7AfHde+8PiO/e/X9j4P3/B/8BQWdaM4+P8DwAAAAASUVORK5CYII=" alt="hoii" className='z'></img>
          </a>
        </div>
        
      </div>
      <diver className="footer-social--icons">

        <div >
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
      </diver>
    </Wrapper>
  );
};
const Wrapper = styled.section`
.footer-social--icons {
  display: flex;
  padding-top:10%;
  gap: 20px;
  .icons {
   
    font-size: 1.5rem;
    position: relative;
    cursor: pointer;
  }

  .z{
  margin-left:3px;
  }
}`;

export default Services
