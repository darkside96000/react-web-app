import React from 'react'
import { NavLink } from 'react-router-dom'
import styled  from 'styled-components'


const Navbar = () => {
  const Nav=styled.nav`
  .navlist{
    display: flex;
    gap: 30px;
    li{
      list-style: none;
      .aa{
        &: link,
        &: visited{
          display: inline-block;
          text-decoration: none;
          font-size:20px;
          font-weight: 700;
          text-transform: uppercase;
          color: black;
          transition: color 0.3s linear;
      }
        &: hover,
        &: active{
          color:red;
        }
      }
    }

   
  }
  `;
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navlist">
            
        <li> <NavLink className="aa" to='./Home'>Home</NavLink></li>
        <li> <NavLink className="aa" to='./About'>About</NavLink></li>
        <li> <NavLink className="aa" to='./Services'>Services</NavLink></li>
        <li> <NavLink className="aa" to='./Contact'>Contact</NavLink></li>

        </ul>

      </div>
    </Nav>
  );
};
export default Navbar;
