import { useState } from "react"
import { Button, CircularProgress } from '@mui/material';
import axios from 'axios'




export default function Jokecard(){
    const [joke,setJoke]=useState("");
    const[loading,setLoading]=useState(false);
    const fetchjoke=async()=>{
        
        setLoading(true);
        try{
            const res= await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
        setJoke(res.data.joke);
    console.log(res);
    }
        catch(err){
            setJoke("joke couldn't be  fetched");
        }
        
        setLoading(false);
        
    };
    return(
        <>
        <h1>Want a joke ?<br />
        Tap the button

        </h1>
        <br />
        <Button variant="contained" onClick={fetchjoke}>Click me for a joke</Button>
       <br /> <br />
       <div>
            {loading&&<CircularProgress/>}
            {joke&&<h3>{joke}</h3>}

        </div>
        </>

    );
}
