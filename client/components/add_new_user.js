import React from 'react'
import { useDispatch } from 'react-redux'

import { addNewUser } from '../redux/reducers/resumes'

const AddNewUser = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <button
            type="button"
            onClick={() =>
              dispatch(addNewUser(it.firstName, it.lastName, it.email, it.age, it.skills, it.education, it.experience))
            }
          >
            Add user
          </button>
        </div>
      </div>
    </div>
  )
}

AddNewUser.propTypes = {}

export default React.memo(AddNewUser)
