import React from 'react'
import { useLanguajeContext, useThemeContext } from '../../hooks/UseProvider'
import ContactForm from './form/ContactForm'
import styles from './../../styles/components/contact.module.scss'

function ContactMe () {
  const myLang = useLanguajeContext()
  const theme : string = useThemeContext()
  const contact = myLang.section[4]
  return (
    <section className={`${styles.contact} ${styles[theme]}`}>
      <h2 id={contact.id} className={styles.sectionID}> {contact.textId} </h2>
      <div className={styles.article} >
        <p>{contact.data.textSection[0]}</p>
        <p>{contact.data.textSection[1]}</p>
        <p>{
          contact.data.textSection[2]}
          <a href='mailto:empireeapp@gmail.com'>
            {contact.data.textSection[3]}
          </a>
        </p>
      </div>
      <section className={styles.formContainer} >
        <ContactForm></ContactForm>
      </section>
    </section>
  )
}

export default ContactMe
