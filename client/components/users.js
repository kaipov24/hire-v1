import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Users = () => {
  const users = useSelector((store) => store.resumes.users)

  return (
    <div>
      <div className="flex justify-center pt-8">

        <div className="md:w-3/4">
          {users.map((it) => {
            return (
              <div key={it._id} className="md:flex bg-white  rounded-lg p-6 mb-4 shadow-lg">
                <div className="flex flex-col w-full ">
                  <h2 className="sm:text-xl m-auto">
                    {it.firstName} {it.lastName}{' '}
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
