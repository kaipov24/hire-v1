import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  const users = useSelector((store) =>
    store.resumes.users.filter((it) => it._id === id)
  )

  return (
    <div>
      <div className="flex justify-center pt-8">
        <div className="md:w-4/5">
          {users.map((it) => {
            return (
              <div key={it} className="md:flex bg-white rounded-lg p-6 mb-4 shadow-lg">
                <img
                  className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                  src="https://sun9-49.userapi.com/c841523/v841523858/471c8/vbkBilhzsAU.jpg"
                  alt=""
                />
                <div className="flex flex-col w-full">
                  <h2 className="text-lg">
                    {it.firstName} {it.lastName}{' '}
                  </h2>
                  <div className="flex justify-between">
                    <div className="text-purple-500 w-1/3">
                      {it.skills.map((item) => {
                        return (
                          <div key={item.id} className="flex flex-row">
                            {item}
                          </div>
                        )
                      })}
                    </div>

                    <div className="w-1/3">
                      <div className="text-gray-600">{it.experience}</div>
                      <div className="text-gray-600">{it.education}</div>
                    </div>
                    <div className="w-1/3">
                      <div className="text-gray-600">{it.email}</div>
                      <div className="text-gray-600">{it.phone}</div>
                    </div>
                    <button type="button">
                      <Link to={`/${it.email}`}>Подробнее</Link>
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

User.propTypes = {}

export default React.memo(User)
