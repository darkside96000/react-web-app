import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Button  from '../Button';

const Herosection = ({name,image}) => {
    return (
        <Wrapper>
            <div className="container-grid-column"> 
                <div className="section-hero-data">
                <p className="hero-top-data">This is Me: </p>              
                <p className="hero-heading">{name} </p>
                <p className="hero-para">Hello guys!!! <br/> I'm SONU ROY <br/>A MERN stack developer a Android Developer and also a Ethical Hacker.</p>
                </div>
                <Button className="btn-Hire-Me"> 
                    <NavLink to="./Contact">Hire Me</NavLink>
                </Button>
              
                <div className="section-hero-image"> 
               
                <picture>
                    <img src={image} alt='img'width={730} height={400}></img>
                </picture>
                </div>
           </div>

        </Wrapper>
    );
};
const Wrapper = styled.section`
.container-grid-column{
  margin-left: 10rem;
  margin-top: 5%;
  
}



  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
  }

  

  .hero-top-data {
    font-weight: 800;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    //text-transform: uppercase;
    font-size: 50px;
    font-weight: 800;
    margin-top: -29px;
  
  }
  
 

  
  .hero-para {
    font-weight: 800;
    margin-top:-40px;
  }

 
  .section-hero-image {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top:-10px;
    margin-left:40%;
   

  }

  .hero-img {
  
    
  }

`;

export default Herosection;