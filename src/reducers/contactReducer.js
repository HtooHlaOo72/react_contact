import {
    GET_CONTACTS,DELETE_CONTACT,EDIT_CONTACT,ADD_CONTACT,GET_CONTACT
} from '../actions/types';

const initialState={
    contacts:[],
    editContact:{}
}

export default function reducer(state=initialState,action){
    switch(action.type){
        case GET_CONTACTS:
            return {...state,contacts:[...action.payload]};
        case DELETE_CONTACT:
            return {...state,contacts:[...state.contacts.filter(contact=>contact._id!==action.payload)]};
        case ADD_CONTACT:
            return {...state,contacts:[action.payload,...state.contacts]};
        case EDIT_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact=>
                    (contact._id===action.payload._id)?action.payload:contact
                    )
                
              };
        case GET_CONTACT:
            return {...state,editContact:action.payload}
        default:
            return state;
    }
}
