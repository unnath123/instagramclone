import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Loginn from './components/Loginn'

const App = () =>{
    return (
        <div>
            <userProvider>
                <Routes>
                    <Route path="/" element={<Signup/>} />
                    <Route path="/Loginn" element={<Loginn/>} />
                </Routes>
            </userProvider>
          
        </div>
    )
}
export default App