import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './header'
import Contact from './contact-form'
import { getUsers } from '../redux/reducers/resumes'


const ContactHome = () => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.resumes.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [users])
  return (
    <div className="bg-indigo-200 h-screen">
      <Header />

      <Contact />
    </div>
  )
}

ContactHome.propTypes = {}

export default ContactHome
