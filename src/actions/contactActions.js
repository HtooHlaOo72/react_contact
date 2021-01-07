import {
    GET_CONTACTS,DELETE_CONTACT,EDIT_CONTACT,ADD_CONTACT,GET_CONTACT
} from '../actions/types';
import axios from 'axios';

export const getContacts=()=>async(dispatch)=>{
    const res=await axios.get('https://localhost:8000/contacts');
    dispatch(
        {
            type:GET_CONTACTS,
            payload:res.data
        }
    )
}
export const getContact=(id)=>async(dispatch)=>{
    const res=await axios.get(`https://localhost:8000/contacts/${id}`);
    dispatch(
        {
            type:GET_CONTACT,
            payload:res.data
        }
    )
}
export const deleteContact=(id)=>async(dispatch)=>{
    await axios.delete(`https://localhost:8000/contacts/delete/${id}`);
    dispatch(
        {
            type:DELETE_CONTACT,
            payload:id
        }
    )
}
export const addContact=(contact)=>async(dispatch)=>{
    const res=await axios.post(`https://localhost:8000/contacts/add`,contact);
    //console.log(res.data);
    dispatch(
        {
            type:ADD_CONTACT,
            payload:res.data
        }
    )
}
export const editContact=(contact)=>async(dispatch)=>{
    const res=await axios.put(`https://localhost:8000/contacts/edit/${contact.id}`,contact);
    //console.log(res.data);
    dispatch(
        {
            type:EDIT_CONTACT,
            payload:res.data
        }
    )
}


