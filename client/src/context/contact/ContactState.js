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
        id: 1,
        name: 'Harry White',
        email: 'hwhite@mail.ru',
        phone: '0500500500'
      },
      {
        type: 'personal',
        id: 2,
        name: 'Ted Johnson',
        email: 'tjohnson@mail.ru',
        phone: '0700800800'
      },
      {
        type: 'professional',
        id: 3,
        name: 'Sarah Smith',
        email: 'ssmith@mail.ru',
        phone: '0700700700'
      }
    ],
    current: null,
    filtered: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid.v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Update Current Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current:state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        updateContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
