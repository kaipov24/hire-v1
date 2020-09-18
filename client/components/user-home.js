import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './header'
import User from './user'
import { getUsers } from '../redux/reducers/resumes'

const UserHome = () => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.resumes.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [users])
  return (

    <div className="bg-indigo-200 h-100%">
      <Header />

      <User />
    </div>
  )
}

UserHome.propTypes = {}

export default UserHome