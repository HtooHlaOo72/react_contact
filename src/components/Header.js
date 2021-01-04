import React, { Component } from 'react'
import {Link} from 'react-router-dom';



export default class Header extends Component {
    render() {
        return (
            
                <nav className="navbar navbar-expand-sm bg-light">
                    <Link className="navbar-brand" to="/"><h1>My Contact</h1></Link>
                    <div className="container-fluid justify-content-end py-4">
                        <ul className="navbar-nav">
                            <li className='nav-item'>
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to='/contact/add'>Add</Link>  
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to='/about'>About</Link>  
                            </li>
                        </ul>
                    </div>
                </nav>
            
        )
    }
}
