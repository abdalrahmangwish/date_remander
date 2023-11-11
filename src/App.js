import { Container } from "react-bootstrap";
import "./index.css";
import { person } from "./data";
import Header from "./components/header.jsx";
import Content from "./components/contant.jsx";
import Footer from './components/footer';
import { useState,useEffect } from "react";



function App() {
 const [personData ,setPersonData]=  useState(person);
 const onDelete=()=>{
   setPersonData([])
 }
 const onView=()=>{
  setPersonData(person)
} 
useEffect(()=>{
  setPersonData([])

},[])
  return  (
    <div className="font color-body">
      <Container className="container full-screen py-5">
        <Header person={personData} />
        <Content person={personData} />
        <Footer deleteAll={onDelete}  onView={onView}/> 
      </Container>
    </div>
  ) 
}

export default App;
