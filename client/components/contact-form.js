import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { sendEmail } from '../redux/reducers/resumes'

const Contact = () => {
  const dispatch = useDispatch()
  const [from] = useState('kaipovich24@gmail.com')
  const [to] = useState('kaipov.kayrat@gmail.com')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [skills, setSkills] = useState('')
  const [education, setEducation] = useState('')
  const [spec, setSpec] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [job, setJob] = useState('')
  const [position, setPosition] = useState('')
  const [since, setSince] = useState('')
  const [till, setTill] = useState('')
  const [highlights, setHighlights] = useState('')
  const [content, setContent] = useState('')

  return (
    <div className="flex justify-center p-10">
      <form className="w-3/4 bg-white rounded-lg p-6 mt-24 mb-4">
        <div className="flex justify-around">
          <div className="flex flex-wrap w-1/2 -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Фамилия
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Stark"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Имя
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Tony"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2  -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Ключевые навыки
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-wrap w-1/2  -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="education"
              >
                Образование или курсы
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="education"
                type="text"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2  -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="spec"
              >
                Направление/специализация
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="spec"
                type="text"
                value={spec}
                onChange={(e) => setSpec(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-wrap w-1/2  -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Номер телефона (Whatsapp)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="phone"
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2  -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Опыт работы(если есть)
          </div>
          <div className="flex justify-around">
            <div className="flex flex-wrap w-1/2 -mx-3 ">
              <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="place"
                >
                  Последнее место работы
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="place"
                  type="text"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2 -mx-3">
              <div className="w-full md:w-full px-3 mb-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="position"
                >
                  Должность
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="position"
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="time"
              >
                С
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="time"
                type="date"
                value={since}
                onChange={(e) => setSince(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="time"
              >
                по
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="time"
                type="date"
                value={till}
                onChange={(e) => setTill(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="duites"
            >
              Обязанности, достижения
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="duites"
              type="text"
              value={highlights}
              onChange={(e) => setHighlights(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-6">
            <label
              className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="text"
            >
              О СЕБЕ(кем вы хотите работать, удаленно или офис, дополнения по
              образованию/опыту работы, что вы делаете лучше всего)
            </label>

            <textarea
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <p className="text-sm italic">Напишите все то, что будет полезно знать вашему работадателю</p>
          </div>

        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={() => {
                dispatch(
                  sendEmail(
                    from,
                    to,
                    firstName,
                    lastName,
                    skills,
                    education,
                    spec,
                    phone,
                    email,
                    job,
                    position,
                    since,
                    till,
                    highlights,
                    content
                  )
                )
              }}
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"> </div>
        </div>
      </form>
    </div>
  )
}

Contact.propTypes = {}

export default React.memo(Contact)
