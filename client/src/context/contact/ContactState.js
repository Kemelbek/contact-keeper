import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: 'personal',
        _id: 1,
        name: 'Harry White',
        email: 'hwhite@mail.ru',
        phone: '0500500500'
      },
      {
        type: 'personal',
        _id: 2,
        name: 'Ted Johnson',
        email: 'tjohnson@mail.ru',
        phone: '0700800800'
      },
      {
        type: 'professional',
        _id: 3,
        name: 'Sarah Smith',
        email: 'ssmith@mail.ru',
        phone: '0700700700'
      }
    ]
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid.v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Current Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
