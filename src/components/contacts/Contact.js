import React,{useState} from 'react'
import {deleteContact,editContact} from '../../actions/contactActions';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';


function Contact(props) {
    const [showInfo,setshowInfo]=useState(false);
    const history=useHistory();


    const onShowMore=()=>{
        setshowInfo(!showInfo);
    }
    
    const onDelete=async (id)=>{
        await props.deleteContact(id);
        window.location.reload(false);
    }
    const onEditRedirect=(id)=>{
        history.push(`/contact/edit/${id}`);
    }
    return (
        
        <div className='card my-2'>
            <div className="card-header">
            <div className='row'>
                <div className='col-sm-6 col-xs-12 rounded-pill bg-warning d-flex align-self-center'>
                    <span className='align-self-center'>{props.name}</span>
                </div>
                
                <div className='col-sm-6 col-xs-12 d-flex justify-content-end'>
                    <span className="btn-dark rounded-pill mx-1 px-2 my-2" onClick={onShowMore}>More</span>
                    {/* <Link to={`/contact/edit/${props._id}`} className='btn-success rounded-pill mx-1 px-2'><span  >Edit</span></Link> */}
                    <span className="btn-success rounded-pill mx-1 px-2 my-2" onClick={()=>onEditRedirect(props._id)}>Delete</span>
                    <span className="btn-danger rounded-pill mx-1 px-2 my-2" onClick={()=>onDelete(props._id)}>Delete</span>
                </div>
            </div>
                   
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
