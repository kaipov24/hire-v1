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
        <div className="md:w-4/5">
          {users.map((it) => {
            return (
              <div
                key={it}
                className="md:flex bg-white sm:text-2xl text-xl rounded-lg  mb-4 shadow-lg capitalize"
              >
                <div className="flex flex-col w-full">
                  <img
                    className=" rounded-lg h-auto"
                    src="https://www.communicationcrafts.com/wp-content/uploads/2020/04/Work_From_Home_1_Blank.jpg"
                    alt=""
                  />
                  <h2 className=" sm:text-5xl text-3xl flex justify-center">
                    {it.firstName} {it.lastName}{' '}
                  </h2>
                  <div className="flex flex-col flex-start justify-between pl-4">
                    <div className="text-purple-700 w-full flex flex-wrap mb-4">
                      <div className="sm:w-1/3 w-full ">Ключевы навыки: </div>
                      {it.skills.map((item) => {
                        return (
                          <div key={item.id} className="flex mr-4">
                            {item}
                          </div>
                        )
                      })}
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex flex-wrap">
                        <div className="text-gray-900 sm:w-1/3 w-full">Удаленно/офис: </div>
                        <div className="text-gray-900 bold sm:w-2/3 w-full ">{it.condition}</div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Возраст: </div>
                        <div className="text-gray-900 bold w-2/3 ">{it.age}</div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 w-full flex flex-wrap">
                        <div className="text-gray-900 sm:w-1/3 w-full">Языки: </div>
                        <div className="text-gray-900 sm:w-2/3 w-full">{it.languages}</div>
                      </div>
                    </div>

                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Номер телефона: </div>
                        <div className="text-gray-900 w-2/3">{it.phone} </div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 w-full flex flex-wrap">
                        <div className="text-gray-900 sm:w-1/3 w-full">Email: </div>
                        <div className="text-gray-900 sm:w-2/3 w-full">{it.email} </div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 w-full flex flex-wrap">
                        <div className="text-gray-900 sm:w-1/3 w-full">Образование/курсы: </div>
                        <div className="text-gray-900 sm:w-2/3 w-full">
                          {it.education} {it.spec}{' '}
                        </div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 w-full flex flex-wrap">
                        <div className="text-gray-900 sm:w-1/3 w-full">Опыт работы: </div>
                        <div className="text-gray-900 sm:w-2/3 w-full">
                          {it.position} в {it.experience} с {it.since} по {it.till}
                        </div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 w-full flex flex-wrap">
                        <div className="text-gray-900  sm:w-1/3 w-full">
                          Обязанности/достижения:{' '}
                        </div>
                        <div className="text-gray-900 sm:w-2/3 w-full">{it.highlights} </div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 w-full flex flex-wrap">
                        <div className="text-gray-900 sm:w-1/3 w-full">О себе: </div>
                        <div className="text-gray-900 sm:w-2/3 w-full">{it.text} </div>
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
