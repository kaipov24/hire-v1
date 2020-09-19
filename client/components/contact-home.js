import React from 'react'
import Header from './header'
import Contact from './contact-form'
import Footer from './footer'

const ContactHome = () => {

  return (
    <div className="bg-indigo-200 h-100%">
      <Header />

      <Contact />
      <div className="flex flex-col flex-end w-full text-center border-t border-grey pin-b ">
        <Footer />
      </div>
    </div>
  )
}

ContactHome.propTypes = {}

export default ContactHome
