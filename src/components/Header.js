import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import { Button } from 'react-bootstrap';


export default class Header extends Component {
    state = { showNav: false };
    showNav = () => {
        this.setState({ showNav: !this.state.showNav });
    }
    render() {
        return (
            <>
                <nav className="navbar d-flex bg-secondary">
                    <h1 onClick={this.showNav} className='mr-auto btn-secondary'>≡</h1>
                    <Link className="navbar-brand ml-auto text-light" to="/"><h1>My Contact</h1></Link>
                    
                </nav>
                {
                    (this.state.showNav)
                    &&
                    <div className="container-fluid justify-content-end py-4">
                        <ul className="navbar-nav text-left">
                            <li className='nav-item '>
                                <Link className="nav-link text-dark" to='/'>Home</Link>
                            </li>
                            <li className='nav-item '>
                                <Link className="nav-link text-dark" to='/contact/add'>Add</Link>
                            </li>
                            <li className='nav-item '>
                                <Link className="nav-link text-dark" to='/about'>About</Link>
                            </li>
                        </ul>
                    </div>
                }

            </>


        )
    }
}
