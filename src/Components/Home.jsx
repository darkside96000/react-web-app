import Herosection from './Herosection';


const Home = () => {

  
  const data = {
    name:"Sonu Roy",
    image : "./pict/hero.svg",

  };
  return (
    <Herosection {...data}/>
  );
    
      
  
};

export default Home;