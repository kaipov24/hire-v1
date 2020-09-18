import React from 'react'

const Footer = () => {
  return (
    <div
      className="py-4 bg-indigo-800 md:flex md:items-center md:justify-center border-solid border-1 border-white"

    >
      <ul className="">
        <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2">
          <a className="text-white underline text-small" href="/disclaimer">
            Disclaimer
          </a>
        </li>
        <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2">
          <a className="text-white underline text-small" href="/cookie">
            Cookie policy
          </a>
        </li>
        <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2">
          <a className="text-white underline text-small" href="/privacy">
            Privacy
          </a>
        </li>
      </ul>
    </div>
  )
}

Footer.propTypes = {}

export default React.memo(Footer)
