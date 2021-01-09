import {
    GET_CONTACTS,DELETE_CONTACT,EDIT_CONTACT,ADD_CONTACT,GET_CONTACT
} from '../actions/types';
import axios from 'axios';

export const getContacts=()=>async(dispatch)=>{
    const res=await axios.get('https://express-contact-api.herokuapp.com/contacts');
    dispatch(
        {
            type:GET_CONTACTS,
            payload:res.data
        }
    )
}
export const getContact=(id)=>async(dispatch)=>{
    const res=await axios.get(`https://express-contact-api.herokuapp.com/contacts/${id}`);
    dispatch(
        {
            type:GET_CONTACT,
            payload:res.data
        }
    )
}
export const deleteContact=(id)=>async(dispatch)=>{
    await axios.delete(`https://express-contact-api.herokuapp.com/contacts/delete/${id}`);
    dispatch(
        {
            type:DELETE_CONTACT,
            payload:id
        }
    )
}
export const addContact=(contact)=>async(dispatch)=>{
    const res=await axios.post(`https://express-contact-api.herokuapp.com/contacts/add`,contact);
    //console.log(res.data);
    dispatch(
        {
            type:ADD_CONTACT,
            payload:res.data
        }
    )
}
export const editContact=(contact)=>async(dispatch)=>{
    const {name,email,phone,_id}=await contact;
    const res=await axios.put(`https://express-contact-api.herokuapp.com/contacts/edit/${contact._id}`,{

        _id:_id,
        name:name,
        email:email,
        phone:phone,

    });
    console.log(name,email,phone,_id,"edit action");
    dispatch(
        {
            type:EDIT_CONTACT,
            payload:res.data
        }
    )
}


