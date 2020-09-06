import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Users from './users'
import { getUsers } from '../redux/reducers/resumes'


const Home = () => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.resumes.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [users])
  return (
    <div className="bg-indigo-200 h-screen">
      <Users />

    </div>
  )
}

Home.propTypes = {}

export default Home
