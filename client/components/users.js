import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
  const users = useSelector((store) => store.resumes.users)
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          {users.map((it) => {
            return (
              <div key={it}>
                <div>{it.lastName}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Users.propTypes = {}

export default React.memo(Users)
