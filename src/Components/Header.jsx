import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
<NavLink to ="/home">
    <img src='./pict/github.png' alt="logo" height={50} className='imm' ></img>

</NavLink>
<Navbar/>

    </MainHeader>
  );
};
const MainHeader=styled.header`

width: 70px
height: 80px;

background-color: #645cfc;
display: flex;
justify-content: space-between;
align-items: center;
.imm{
  padding: 2px;
}
`;
export default Header;