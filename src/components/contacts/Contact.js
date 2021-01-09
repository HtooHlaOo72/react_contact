import React,{useState} from 'react'
import {deleteContact,editContact} from '../../actions/contactActions';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


function Contact(props) {
    const [showInfo,setshowInfo]=useState(false);
    const onShowMore=()=>{
        setshowInfo(!showInfo);
    }
    
    const onDelete=async (id)=>{
        await props.deleteContact(id);
        window.location.reload(false);
    }
    return (
        
        <div className='card'>
            <div className="card-header">
                <h3>
                    {props.name}
                    <span className="badge badge-pill badge-dark mx-5 " onClick={onShowMore}>More</span>
                    <Link to={`/contact/edit/${props._id}`}><span className="badge badge-pill badge-success mx-3 float-right" >Edit</span></Link>
                    <span className="badge badge-pill badge-danger mx-3 float-right" onClick={()=>onDelete(props._id)}>Delete</span>
                </h3>
                
            </div>
            {
                (showInfo)&&
                <ul className="card-body list-group ">
                    <li className='list-group-item'>{props.email}</li>
                    <li className='list-group-item'>{props.phone}</li>
                </ul>
            }
            
        </div>
        
    )
}

export default connect(null,{deleteContact,editContact})(Contact);
