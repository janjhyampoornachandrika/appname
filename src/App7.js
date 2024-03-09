import React from 'react'
import {useEffect,useState} from "react"
 

export default function App7() {
//     const[count,setCount]=useState(0);
//     console.log("compound loaded");
//   return (
//     <>
//     <button onClick={()=>setCount((prevState)=>prevState + 1)}>
//         Click
//     </button>
//     <span>{count}</span>
//     </>
// )
    const[runs,setRuns]=useState(0);
    const[wickets,setWickets]=useState(0);
    //console.log("component loaded");
    useEffect(()=>{
    //     console.log("Better luck next time");
    // },[wickets]);

    if (wickets > 0) console.log(`Wickets:${wickets}.Better Luck Next Time!`);
}, [wickets]);

useEffect(() => {
  if (runs > 0) console.log(`Good Job! Score:${runs}`);
}, [runs]);
    return(
        <>
        <button onClick={()=>setRuns((prevState)=>prevState + 1)} >
            Runs({runs})
       </button>
       <button onClick={()=>setWickets((prevState)=>prevState + 1)} >
            Wickets({wickets})
       </button>

        </>
    )

}
