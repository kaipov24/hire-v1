import React from 'react'
import Header from './header'

import Footer from './footer'

const About = () => {
  return (
    <div className="bg-indigo-200 min-h-screen flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <div className="flex justify-center">
        <div className="w-full sm:w-3/4 bg-white rounded-lg p-6 mt-24 mb-4">
          <img
            className="m-auto mb-4"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--xq8xxUmL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://external-preview.redd.it/x7vVnP3L75Wh4ApmXedKjze9b7ZuH5h7oW-4xbHMiHQ.jpg%3Fauto%3Dwebp%26s%3Db7d6873eed8c442bb685a083b3b4bfff6dd009ac"
            alt=""
          />
          <h2 className="text-2xl font-bold flex justify-center">Hire people with disabilities</h2>
          <div>
            Многие во время пандемии, ощутили на своем опыте, как сложно найти удалённую работу.
            Люди с особыми потребностями сталкивались с данными трудностями всегда. Если Вы можете
            помочь, предоставив рабочие места, Вы получите в свою команду сотрудника, который не
            нуждается в дополнительной мотивации и всегда дисциплинирован.{' '}
          </div>
          <div>
            Стэк технологий для создания сайта: MongoDB, Express, React, Node, Tailwind CSS.{' '}
          </div>
          <div>
            <span className="text-base font-bold ">Уважаемые соискатели</span> отправляя резюме, Вы не получите гарантию трудоустройства. Ваше резюме поступит мне, я его опубликую на сайте. Данная инициатива добровольна, направлена чтобы помочь. При позникновении вопросов пишите на почту kaipov.kayrat@gmail.com.
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

About.propTypes = {}

export default React.memo(About)
