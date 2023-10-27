import axios from 'axios';
import React, { useContext, useState } from 'react'
import userContext from '../context/userContext';


const Signup = () =>{

    const [user, setUser] = useState({name:"", email:"", password:"", cfpassword:""});

    const {name, email, password, cfpassword} = user;

    const {setToken} = useContext(userContext)

    function handleInput(e){
        setUser({...user, [e.target.name]:e.target.value})
    }

    function HandleSubmit1(e){
        e.preventDefault()
        if(!name || !email || !password || !cfpassword){
            alert("Please fill all the details")
        }
        else if(password !== cfpassword){
            alert("password doesnt match")
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
                
            })
            .catch((e)=>console.log("something went wrong"))
        }
    }

    return (
        <div>
          <h1>Signup Page</h1>
          <form onSubmit={HandleSubmit1}>
            <input type='text' name="name" value={user.name} placeholder='Enter your Name' onChange={handleInput}/>
            <input type='email' name="email" value={user.email} placeholder='Enter your Email' onChange={handleInput}/>
            <input type='password' name="password" value={user.password} placeholder='Enter password' onChange={handleInput}/>
            <input type='password' name="cfpassword" value={user.cfpassword} placeholder='Confirm your password' onChange={handleInput}/>
            <button type='submit'>Submit</button>
          </form>
        </div>
    )
}
 
export default Signup