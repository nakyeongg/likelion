import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Login from './Page/Login'
import Ticket from './Page/Ticket'
import Popular from './Page/Popular'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/ticket' element={<Ticket/>} />
                <Route path='/popular' element={<Popular/>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App