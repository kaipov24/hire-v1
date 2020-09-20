import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './header'
import Users from './users'
import Footer from './footer'
import Hero from './hero'

import { getUsers } from '../redux/reducers/resumes'

const Home = () => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.resumes.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [users])
  return (
    <div className="bg-indigo-200 min-h-screen flex flex-col justify-between">
      <div className="flex-grow">
        <Header />
        <Hero />
        <Users />
      </div>
      <div className="flex flex-col flex-end w-full text-center border-t border-grey pin-b ">
        <Footer />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
