import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import { Button } from 'react-bootstrap';


export default class Header extends Component {
    state = { show: false };
    showNav = () => {
        this.setState({ show: !this.state.show });
    }
    closeNav=()=>{
        console.log('on blur')
    }
    render() {
        return (
            <>
                <nav className="navbar d-flex bg-secondary">
                    <h1 onClick={this.showNav} onBlur={this.closeNav} className='mr-auto btn-secondary'>≡</h1>
                    <Link className="navbar-brand ml-auto text-light" to="/"><h1>My Contact</h1></Link>
                    
                </nav>
                {
                    (this.state.show)
                    &&
                    <div className="container-fluid  py-4">
                        <ul className="navbar-nav text-left">
                            <li className='nav-item'>
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
