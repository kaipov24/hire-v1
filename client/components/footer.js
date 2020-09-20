import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="py-4 bg-indigo-800 flex justify-center border-solid border-1 border-white">
      <ul className="flex md:flex-row flex-col">
        <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2">
          <div className="text-white text-small">По вопросам: </div>
        </li>
        <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2">
          <div className="text-white text-small">kaipov.kayrat@gmail.com</div>
        </li>
        <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2">
          <div className="text-white text-small">
            <Link to="/contact">Отправить резюме</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

Footer.propTypes = {}

export default React.memo(Footer)
