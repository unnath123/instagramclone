import React from 'react'
import userContext from './userContext';
import { useState, useEffect } from 'react'

const userProvider = ({children}) =>{

    const [token,setToken] = useState(null);


    return (
       <userContext.Provider value={{token,setToken}}>
            {children}
       </userContext.Provider>
    )
}

export default userProvider
