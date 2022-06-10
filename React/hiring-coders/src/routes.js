import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Repositories from './Repositories'
import Home from './Home'

export default function rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<Home />}></Route>
                <Route path='/repositories' element={< Repositories/>}/>
            </Routes>
        </Router>
    )
}