import styled from "styled-components";
const Button=styled.button`
text-decoration :none;
background-color: rgb(98 84 243);
color: rgb(255 255 255);
padding: 5px;
border:none;
text-transform: uppercase;
text-align: center;
cursor: pointer;
transition: all 0.3s ease;
-webkit-transition: all 0.3s ease 0s;
-moz-transition: all 0.3s ease 0s;
-o-transition: all 0.3s ease 0s;

&: hover,
&: active{
    box-shadow: 0 2rem 2rem 0 rgb(132 110 255 / 30%);
    transform: scale(0.97);
}
a{
    text-decoration: none;
    color:rgb(255 255 255);
    font-size: 1.2rem;
}



`;
export default Button;