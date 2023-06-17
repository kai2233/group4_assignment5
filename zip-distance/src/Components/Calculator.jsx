import React, { useEffect,useState} from "react";
import axios from "axios";
const Calculator =()=> {
    const [distanceState, setdistanceState] = useState ([])
    const [input1,setInput1] = useState ("") 
    const [input2,setInput2] = useState ("") 
    async function fetchInfo(){
        const result = await axios.get(`https://zip-api.eu/api/v1/distance/US-${input1}/US-${input2}/mi`) 
        console.log(result)
        setdistanceState(result.data)
    }

    return(
    
    <div>
       <input type="text" placeholder="starting zip code" onChange={e=>{setInput1(e.target.value)}}/> 
       <br></br>
       <input type="text" placeholder="ending zip code" onChange={e=>{setInput2(e.target.value)}}/> 
       <br></br>
       <button onClick={fetchInfo}> Submit </button> 
        {distanceState.distance ? (<h1>The distance between these two zip codes is {Number(distanceState.distance).toFixed(2)} miles </h1>) : (<h1>Please enter two zip codes.</h1>)}

        
    </div>
    );
   

}
export default Calculator;