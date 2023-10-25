import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Loginn from './components/Loginn'

const App = () =>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Signup/>} />
                <Route path="/Loginn" element={<Loginn/>} />

            </Routes>
        </div>
    )
}
export default App