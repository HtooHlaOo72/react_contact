import React, { Component } from 'react'
import SingleInput from './SingleInput';
import { connect } from 'react-redux';
import { getContact,editContact } from '../../actions/contactActions';
//import axios from 'axios';
class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        error: {
            name: '',
            email: '',
            phone: ''
        }
    };
    async componentDidMount(){
        const {id}=this.props.match.params;
        await this.props.getContact(id);
        const {name,email,phone}=await this.props.contacts;
        this.setState({
            name,email,phone
        })
        
        
    }
    onSubmit =(e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        this.setState({
            ...this.state, error: {
                name: '',
                email: '',
                phone: ''
            }
        })
        let formError = {
            name: '',
            email: '',
            phone: ''
        }
        if (!name) {
            console.log("Name err", formError);
            formError.name="Name is required";
        }
        if (!email) {
            console.log("Email err", formError);
            formError.email="Email is required";
        }
        if (!phone) {
            console.log("Phone err",formError);
            formError.phone="Phone is required";
        }

        if(formError.name||formError.email||formError.phone){
            this.setState({...this.state,error:{...this.state.error,...formError}})
        }else{
            const {id}=this.props.match.params;
            this.props.editContact({name,email,phone,_id:id});
            this.setState({
                name: '',
                email: '',
                phone: '',
                error: {
                    name: '',
                    email: '',
                    phone: ''
                }
            });
            this.props.history.push('/');
        }
    }
    onChange = (e) => {
       //console.log(e.target.name, e.target.value);
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
    render() {
        const { name, email, phone,error} = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <SingleInput type='text'  name="name" id='name' value={name} onChange={this.onChange} />
                    <SingleInput type='email'  name="email" id='email' value={email} onChange={this.onChange} />
                    <SingleInput type='text'  name="phone" id='phone' value={phone} onChange={this.onChange} />
                    <button type="submit" className="btn btn-primary">UPDATE</button>
                </form>
                <div>
                    {
                        (error) &&
                        <div className='text-danger'>
                            <p>{error.name}</p>
                            <p>{error.email}</p>
                            <p>{error.phone}</p>
                        </div>

                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    contacts:state.contact.editContact
})
    

export default connect(mapStateToProps, { getContact,editContact })(EditContact);
