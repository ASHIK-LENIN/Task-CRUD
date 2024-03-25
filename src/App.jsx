import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ProtectedRoute from './components/ProtectedRoute'
import Items from './components/Items'
import UpdateUser from './components/UpdateUser'
import DeleteUser from './components/DeleteUser'
import Profile from './components/Profile'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />

                {/* Protected route */}
                {/* <Route element={<ProtectedRoute />}> */}
                    <Route path='/items' element={<Items />} />
                    <Route path='/update-user' element={<UpdateUser />} />
                    <Route path='/delete-user' element={<DeleteUser />} />
                    <Route path='/profile' element={<Profile />} />
                {/* </Route> */}

                
            </Routes>
        </BrowserRouter>
    )
}

export default App
