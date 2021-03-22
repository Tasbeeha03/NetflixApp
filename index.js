import React from 'react';
import ReactDOM from 'react-dom';
import Sdata from './Sdata';
import Card from './Card';
import './index.css';
import Navbar from './Navbar';
/*
function ncard(val){
  console.log(val);
 
}*/
ReactDOM.render(
 <> 
 
 <h2 className="heading_Style">Netflix Originals</h2>
 <Navbar></Navbar><br></br>
    <h3 
    style={{
      color: "white",
      marginLeft: "20px",
      textAlign: "center"
    }}>Netflix is the home of amazing original programming that you can’t find anywhere else.
       Movies, TV shows, specials and more, it’s all tailored specifically to you.<br></br>
       <a href="https://www.netflix.com/pk/watch-free" target="_blank"
       style={{color: "white"}}>Watch now for free</a></h3>
     {Sdata.map((val, index) =>{
       console.log(val,index);
 return (
    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}></Card>
  )
  
     })}
   </>,
  document.getElementById('root')
);

