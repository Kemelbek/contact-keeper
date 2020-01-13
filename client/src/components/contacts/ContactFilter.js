import React, {useContext, useRef} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
  const contactContext = useContext()

  return (
    <div>
      <input type="text" ref ={text}/>
    </div>
  )
}

export default ContactFilter
