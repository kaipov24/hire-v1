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
                className="md:flex bg-white text-2xl rounded-lg  mb-4 shadow-lg capitalize"
              >
                <div className="flex flex-col w-full">
                  <img
                    className=" rounded-lg h-auto"
                    src="https://www.communicationcrafts.com/wp-content/uploads/2020/04/Work_From_Home_1_Blank.jpg"
                    alt=""
                  />
                  <h2 className=" text-5xl flex justify-center">
                    {it.firstName} {it.lastName}{' '}
                  </h2>
                  <div className="flex flex-col justify-between pl-4">
                    <div className="text-purple-700 w-full flex mb-4">
                      <div className=" w-1/3">Ключевы навыки: </div>
                      {it.skills.map((item) => {
                        return (
                          <div key={item.id} className="flex mr-4">
                            {item}
                          </div>
                        )
                      })}
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Удаленно/офис </div>
                        <div className="text-gray-900 bold w-2/3 ">{it.condition}</div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Возраст </div>
                        <div className="text-gray-900 bold w-2/3 ">{it.age}</div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Языки: </div>
                        <div className="text-gray-900 w-2/3">{it.languages}</div>
                      </div>
                    </div>

                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Номер телефона: </div>
                        <div className="text-gray-900 w-2/3">{it.phone} </div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Email: </div>
                        <div className="text-gray-900 w-2/3">{it.email} </div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Образование/курсы: </div>
                        <div className="text-gray-900 w-2/3">
                          {it.education} {it.spec}{' '}
                        </div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Опыт работы: </div>
                        <div className="text-gray-900 w-2/3">
                          {it.position} в {it.experience} с {it.since} по {it.till}
                        </div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">Обязанности/достижения: </div>
                        <div className="text-gray-900 w-2/3">{it.highlights} </div>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <div className="text-gray-800 flex">
                        <div className="text-gray-900 w-1/3">О себе </div>
                        <div className="text-gray-900 w-2/3">{it.text} </div>
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
