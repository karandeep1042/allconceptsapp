import React from 'react'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Courses from './Courses';
import About from './About';

export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/courses' element={<Courses />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
