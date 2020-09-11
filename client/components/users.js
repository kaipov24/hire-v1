import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sendEmail } from '../redux/reducers/resumes'

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.resumes.users)
  const [from] = useState('kaipovich24@gmail.com')
  const [to] = useState('kaipov.kayrat@gmail.com')
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')

  return (
    <div>
      <div className="flex justify-center">
        <div className="md:w-4/5 ">
          {users.map((it) => {
            return (
              <div key={it} className="md:flex bg-white rounded-lg p-6 mb-4">
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
                          <div key={item} className="flex flex-row">
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
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <input type="text" placeholder="to" />
        <input type="text" placeholder="from" />
        <input
          type="text"
          placeholder="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            dispatch(sendEmail(from, to, subject, text))
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}

Users.propTypes = {}

export default React.memo(Users)
