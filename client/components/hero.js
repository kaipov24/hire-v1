import React from 'react'

import './extra.css'

const Hero = () => {
  return (
    <div className="background__hero">
      <div className=" imgClass">
        <div className="relative pt-24 text-white container px-3 flex mx-auto flex-wrap flex-col md:flex-row items-center">
          <div className="flex pt-8 flex-col w-3/4 md:w-3/5 justify-start items-start text-left">
              Вы можете предложить работу человеку с инвалидностью?
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Уникальные кандидаты здесь
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Предоставив хорошие условия, вам гарантирован резуьтат и честность!
            </p>

            <button
              type="button"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            >
              Subscribe
            </button>
          </div>

          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {}

export default React.memo(Hero)
