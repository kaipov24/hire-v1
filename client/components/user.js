import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  const users = useSelector((store) =>
    store.resumes.users.filter((it) => it._id === id)
  )

  return (
    <div>
      <div className="flex justify-center pt-24">
        <div className="md:w-3/5">
          {users.map((it) => {
            return (
              <div key={it} className="md:flex bg-white rounded-lg p-6 mb-4 shadow-lg">
                <div className="flex flex-col w-full">
                  <h2 className="text-lg flex justify-center">
                    {it.firstName} {it.lastName}{' '}
                  </h2>
                  <div className="flex flex-col justify-between">
                    <div className="text-purple-700 w-full flex ">
                      <div className=" w-1/3">Ключевы навыки: </div>
                      {it.skills.map((item) => {
                        return (
                          <div key={item.id} className="flex">
                            {item}
                          </div>
                        )
                      })}
                    </div>

                    <div className="w-full">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Образование/курсы: </div>
                        <div className="text-gray-900 w-/3">{it.education} </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Номер телефона: </div>
                        <div className="text-gray-900 w-/3">{it.phone} </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Email: </div>
                        <div className="text-gray-900 w-/3">{it.email} </div>
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Опыт работы: </div>
                        <div className="text-gray-900 w-/3">
                          {it.position} в {it.experience} с {it.since} по {it.for}
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Обязанности/достижения: </div>
                        <div className="text-gray-900 w-/3">{it.highlights} </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">О себе </div>
                        <div className="text-gray-900 w-/3">{it.about} </div>
                      </div>
                    </div>
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
