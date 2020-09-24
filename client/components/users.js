import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../redux/reducers/resumes'

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.resumes.users)
  const searchItem = useSelector((store) => store.resumes.search.field.toLowerCase())

  function preSort(arr, sortBy) {
    if (sortBy === 'lastName') {
      return arr.sort(function alphabet(a, b) {
        const nameA = a.lastName.toUpperCase()
        const nameB = b.lastName.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    }
    return arr
  }

  const search =
    searchItem.length > 1
      ? users.filter(
          (it) =>
            it.firstName.toLowerCase() === searchItem ||
            it.lastName.toLowerCase() === searchItem ||
            it.text.toLowerCase().includes(searchItem) ||
            it.skills.map((v) => v.toLowerCase()).includes(searchItem)
        )
      : users

  useEffect(() => {
    dispatch(searchUser(''))
  }, [])

  return (
    <div>
      <div className="flex justify-center pt-8">
        <div className="md:w-3/4 w-4/5">
          {preSort(search, 'lastName').map((it) => {
            return (
              <div key={it._id} className="md:flex bg-white  rounded-lg p-6 mb-4 shadow-lg">
                <div className="flex flex-col w-full ">
                  <h2 className="sm:text-xl m-auto">
                    {it.lastName} {it.firstName}
                  </h2>
                  <div className="flex justify-between sm:flex-row flex-col">
                    <div className="text-purple-500 sm:w-1/3 w-full">
                      {it.skills.map((item) => {
                        return (
                          <div key={item.id} className="flex flex-row">
                            {item}
                          </div>
                        )
                      })}
                    </div>

                    <div className="sm:w-1/3 w-full">
                      <div className="text-gray-600">
                        {it.experience} {it.since}-{it.till}
                      </div>
                      <div className="text-gray-600">{it.education}</div>
                    </div>
                    <div className="sm:w-1/3 w-full">
                      <div className="text-gray-600">{it.email}</div>
                      <div className="text-gray-600">{it.phone}</div>
                    </div>
                    <button
                      type="button"
                      className="mx-auto lg:mx-0 hover:bg-indigo-800 outline-none hover:text-white transition duration-500 ease-in-out bg-white text-indigo-800 font-bold rounded-full py-4 px-4 shadow-lg transform hover:-translate-y-1 hover:scale-110"
                    >
                      <Link to={`/${it._id}`}>Подробнее</Link>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Users.propTypes = {}

export default React.memo(Users)
