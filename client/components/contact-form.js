import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { sendEmail } from '../redux/reducers/resumes'

const Contact = () => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [from] = useState('kaipov.kayrat@gmail.com')
  const [to] = useState('hirepeoplewithdisabilities@gmail.com')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [skills, setSkills] = useState('')
  const [languages, setLanguages] = useState('')
  const [condition, setCondition] = useState('')
  const [age, setAge] = useState('')
  const [education, setEducation] = useState('')
  const [spec, setSpec] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('')
  const [position, setPosition] = useState('')
  const [since, setSince] = useState('')
  const [till, setTill] = useState('')
  const [highlights, setHighlights] = useState('')
  const [content, setContent] = useState('')
  const remote = 'Удаленно'
  const office = 'Офис'
  const both = 'Удаленно или офис'

  return (
    <div className="flex justify-center p-10">
      <form className="md:w-3/4 w-full bg-white rounded-lg p-6 mt-24 mb-4">
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-wrap md:w-1/2 w-full -mx-3 mb-6">
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
          <div className="flex flex-wrap w-full md:w-1/2  -mx-3 mb-6">
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
        <div className="flex justify-around flex-wrap ">
          <div className="flex w-full md:w-1/2  -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
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
          <div className="flex flex-wrap w-full md:w-1/2 -mx-3 mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
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
        <div className="flex justify-around flex-wrap">
          <div className="flex  w-full md:w-1/2 -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
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
          <div className="flex w-full md:w-1/2 -mx-3 mb-6">
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
        <div className="flex justify-around flex-wrap">
          <div className="flex w-full md:w-1/2  -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="languages"
              >
                Языки
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="languages"
                type="text"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full md:w-1/4 sm:w-1/2 -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="condition"
              >
                Удаленно/офис
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="condition"
                onChange={(e) => setCondition(e.target.value)}
              >
                <option>{remote}</option>
                <option>{office}</option>
                <option>{both}</option>
              </select>
            </div>
          </div>
          <div className="flex w-full md:w-1/4 sm:w-1/2  -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="age"
              >
                Возраст
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Опыт работы(если есть)
          </div>
          <div className="flex justify-around flex-wrap">
            <div className="flex w-full md:w-1/2 -mx-3 ">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="experience"
                >
                  Последнее место работы
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="experience"
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-full md:w-1/2 -mx-3">
              <div className="w-full  px-3 mb-2">
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
          <div className="flex justify-around flex-wrap w-full">
            <div className="w-full md:w-1/2  px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="time"
              >
                С(месяц/день/год)
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
              О СЕБЕ(кем вы хотите работать, удаленно или офис, дополнения по образованию/опыту
              работы, что вы делаете лучше всего)
            </label>

            <textarea
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <p className="text-sm italic">
              Напишите все то, что будет полезно знать вашему работадателю
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full md:items-center">
          <div className="flex justify-center">
            <button
              className="shadow bg-teal-400 hover:bg-teal-400 m-auto focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => {
                setShowModal(true)
              }}
            >
              Отправить
            </button>
          </div>
        </div>
      </form>
      {showModal ? (
        <>
          <div className="p-6 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white p-4 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-2  border-gray-300 rounded-t">
                  <h3 className="text-indigo-500 ">Отправить резюме и перейти на главную?</h3>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-full outline-none"
                    style={{ transition: 'all 0.15s ease' }}
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
                          languages,
                          condition,
                          age,
                          experience,
                          position,
                          since,
                          till,
                          highlights,
                          content
                        )
                      )
                    }}
                  >
                    <Link to="/">Да</Link>
                  </button>
                  <button
                    type="button"
                    className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    Нет
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </div>
  )
}

Contact.propTypes = {}

export default React.memo(Contact)
