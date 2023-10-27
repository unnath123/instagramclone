import React, { useState,useContext } from 'react'
import userContext from '../context/userContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Loginn = () =>{
    const [user, setUser] = useState({name:"", email:"", password:""});

    const {name, email, password} = user;

    const {setToken} = useContext(userContext)

    const navigate = useNavigate()

    function handleInput(e){
        setUser({...user, [e.target.name]:e.target.value})
    }

    function HandleSubmit(e){
        e.preventDefault()
        if(!email || !password){
            alert("Please fill all the details")
        }
        else{
            axios.post("https://instagram-express-app.vercel.app/api/auth/signup" , {name,email,password})
            .then( response => {
                console.log(response.data);
                // from the context
                setToken(response.data.data.token);
 
                // add token to local storage
                localStorage.setItem("token", response.data.data.token);
 
                 alert("Signup successful")
                //  navigate()
                
            })
            .catch((e)=>console.log("something went wrong"))
    }
}
    return (
        <div>
          <h1>Login Page</h1>
          <form onSubmit={HandleSubmit}>
        
            <input type='email' name="email" value={user.email} placeholder='Enter your Email' onChange={handleInput}/>
            <input type='password' name="password" value={user.password} placeholder='Enter password' onChange={handleInput}/>
           
            <button type='submit'>Submit</button>
          </form>
        </div>
    )
}


export default Loginn
