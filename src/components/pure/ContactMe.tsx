import React from 'react'
import ContactForm from './form/ContactForm'

function ContactMe () {
  return (
    <section className="contact-me">
      <h2 id='ContactMe'> Contact</h2>
      <article className="contact-me__article" >
        <p>Edwing Abraham Picado Pantoja</p>
        <p>Frontend Developer</p>
      </article>
      <section className='contact-me__form'>
        <ContactForm></ContactForm>
      </section>
    </section>
  )
}

export default ContactMe
