import React from 'react'
//import { useState } from 'react';
import Herosection from './Herosection';

const About = () => {
  const data={
    name:"Sonu Roy",
    image:"./pict/about1.svg",
  };
  return (
    <div>
       <Herosection {...data}/>
    </div>
    
     
    
  );
};

export default About;
