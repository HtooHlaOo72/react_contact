import {
    GET_CONTACTS,DELETE_CONTACT,EDIT_CONTACT,ADD_CONTACT,GET_CONTACT
} from '../actions/types';
import axios from 'axios';

export const getContacts=()=>async(dispatch)=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(
        {
            type:GET_CONTACTS,
            payload:res.data
        }
    )
}
export const getContact=(id)=>async(dispatch)=>{
    const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch(
        {
            type:GET_CONTACT,
            payload:res.data
        }
    )
}
export const deleteContact=(id)=>async(dispatch)=>{
    const res=await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch(
        {
            type:DELETE_CONTACT,
            payload:id
        }
    )
}
export const addContact=(contact)=>async(dispatch)=>{
    const res=await axios.post(`https://jsonplaceholder.typicode.com/users`,contact);
    console.log(res.data);
    dispatch(
        {
            type:ADD_CONTACT,
            payload:res.data
        }
    )
}
export const editContact=(contact)=>async(dispatch)=>{
    const res=await axios.post(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact);
    console.log(res.data);
    dispatch(
        {
            type:EDIT_CONTACT,
            payload:res.data
        }
    )
}


