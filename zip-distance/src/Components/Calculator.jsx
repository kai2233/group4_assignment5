import React, { useEffect,useState} from "react";
import axios from "axios";
const Calculator =()=> {
    const [distanceState, setdistanceState] = useState ([])
    const [input1,setInput1] = useState ("") 
    const [input2,setInput2] = useState ("") 
    var distanceInMiles = "_____";
    async function fetchInfo(){
        const result = await axios.get(`https://zip-api.eu/api/v1/distance/US-${input1}/US-${input2}/mi`) 
        console.log(result)
        setdistanceState(result.data)
        distanceInMiles = Number(distanceState.distance).toFixed(2);
        
    }

   

    console.log(distanceInMiles);
return(
    
    <div>
        <form onSubmit={fetchInfo}> 
       <input type="text" placeholder="starting zip code" onChange={e=>{setInput1(e.target.value)}}/> 
       <br></br>
       <input type="submit" placeholder="ending zip code" onChange={e=>{setInput2(e.target.value)}}/> 
       <br></br>
       {/* <button type="submit"> Submit </button>  */}
        {/* <h1>The distance between this two zip code is {distanceInMiles} miles </h1> */}
        </form>
        {distanceInMiles &&<h1>The distance between this two zip code is {distanceInMiles} miles </h1>}

        
    </div>
    );
   

}
export default Calculator;