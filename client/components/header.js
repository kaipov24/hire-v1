import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [toggled, setToggled] = useState(true)
  return (
    <nav id="header" className="fixed bg-indigo-800 w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <button
            type="button"
            className="inline-block text-white font-bold text-2xl lg:text-4xl outline-none no-underline hover:text-gray-200 py-2 px-4"
          >
            <Link to="/">HPD</Link>
          </button>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            type="button"
            id="nav-toggle"
            className="flex items-center p-1 text-orange-800 hover:text-gray-900"
            onClick={() => {
              setToggled(!toggled)
            }}
          >

            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3 flex">
              <div className="inline-block text-white no-underline  py-2 px-4">
                <Link to="/about">О проекте</Link>
              </div>
            </li>
          </ul>
          <button
            type="button"
            id="navAction"
            className="mx-auto lg:mx-0 outline-none bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
          >
            <Link to="/contact">Отправить резюме</Link>
          </button>
        </div>
      </div>
      <div className={`${toggled ? 'hidden' : 'flex flex-col items-center'}`}>
        {' '}
        <div className="inline-block text-white no-underline  py-2 px-4">
          <Link to="/about">О проекте</Link>
        </div>
        <div className="inline-block text-white no-underline  py-2 px-4">
          <Link to="/contact">Отправить резюме</Link>
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
