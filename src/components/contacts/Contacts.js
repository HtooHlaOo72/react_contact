import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getContacts} from '../../actions/contactActions';

import Contact from './Contact';

class Contacts extends Component {

    componentDidMount(){
        console.log("component did mount")
        this.props.getContacts();
    }
    render() {
        const {contacts}=this.props;
        return (
            <div className="my-3">
                {
                   contacts.map((contact,i)=>(
                       <Contact key={i} {...contact}/>
                   ))
                }
                
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    contacts:state.contact.contacts
})
export default connect(mapStateToProps,{getContacts})(Contacts);