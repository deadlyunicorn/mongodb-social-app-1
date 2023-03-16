'use client'

import { useState,useEffect } from "react"


const FetchButton = (props:{passDown:(string)[]}) =>{




    const [button,setButton]=useState(false);
    const [input,setInput]=useState("");
    //maybe useRef??

    //const [hasData,setHasData]=useState(0);
    const [field,setField]=useState("genres");
    const [query,setquery]=useState("Loading Data..");



    useEffect(()=>{

        if (props.passDown.length>0){
          //setHasData(1);
          const firstDocument=((JSON.parse(props.passDown[0])[field]));
          if (firstDocument!=undefined){
            setquery(firstDocument.toString());
          }
          else setquery("Not found..");

        
        }
        else setquery("Loading Data..");

    },[props.passDown,field])


    return (
    <>
      <div className="text-center flex flex-col gap-2">

        <input 
          type='text'
          className="placeholder:text-center rounded-md mx-4 px-2"
          placeholder="genres,languages,title"
          onChange={(event)=>{
            setInput(event.target.value)
            }}/>

        <button 
          onClick={()=>{
            setButton(true);setField(input)
          }}
          className=" p-1 rounded-md text-white
          bg-white bg-opacity-5 hover:bg-opacity-10">
        
            Search
        </button>

        <div>
          {/* {hasData} */}
        </div>

        <div className="text-pink-200 font-extralight">
          {(button&&query!=null)&&query.replaceAll(",",", ")}
        </div>
      
      </div>
    </>
  )
}

console.log('runs')

export default FetchButton;