import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [toggled, setToggled] = useState(true)
  // const [search, setSearch] = useState('')
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
            {/* <li className="mr-3 flex">
              <div className="shadow flex">
                <input
                  className="w-full rounded p-2"
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="submit"
                  className=" w-auto flex justify-end items-center text-blue p-2 hover:text-blue-light"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </li> */}
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
