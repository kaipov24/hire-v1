import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './header'
import User from './user'
import Footer from './footer'
import { getUsers } from '../redux/reducers/resumes'

const UserHome = () => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.resumes.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [users])
  return (
    <div className="bg-indigo-200 min-h-screen">
      <div className="flex-grow">
        <Header />
        <User />
      </div>
      <div className="flex flex-col flex-end w-full text-center border-t border-grey pin-b ">
        <Footer />
      </div>
    </div>
  )
}

UserHome.propTypes = {}

export default UserHome