import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import User from '../model/user'

interface Props {
  user: User;
}

const Main: React.FC<Props> = ({ user }) => {

  return (
    <div>
      {
        user
        ? (<div>
            Hello {`${user.name}`}.
            <Link to="/">
              Back to home
            </Link>
          </div>)
        : <Redirect to="/" />
      }
    </div>
  )
}

export default Main;
