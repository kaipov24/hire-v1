import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0 ">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
            <span className="text-2xl pl-2">
              <Link to="/">HPD</Link>
            </span>
          </a>
        </div>
        <div className="flex w-full pt-2 content-center justify-center md:w-1/2 md:justify-end">
          <ul className="list-reset flex justify-center  flex-1 md:flex-none items-center">
            <li className="mr-3 ">
              <button
                type="button"
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              >
                <Link to="/contact">Отправить резюме</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
