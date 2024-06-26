import { useState, useEffect } from "react";
import {getAllStarShips} from "./components/Services/Sw-api";
import "./App.css";
import StarShipCard from "./components/StarShipCard/StarShipCard";

function App() {
const [data, setData] = useState([]);
console.log(data)


  // useEffect
  useEffect(() => {
    const fetchData= async()=>{
      try{
    const result= await getAllStarShips()
    setData(result.results)
      } catch(error){
      console.error(error)
}};fetchData();}, []);

  return (
    <>
      <h1>Star Wars Starship</h1>
      <div className="container">
 
          {data.map((starship) => (
           
              <p>Name:{starship.name}</p>
           
          ))}
          

        
      </div>
    
  
   
 
       </>    
    
)}



export default App;

