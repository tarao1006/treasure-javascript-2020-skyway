import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Information from './Information'
import User from '../model/user'
import { users } from '../routes'

const Wrapper = styled.div`
  margin: 0 auto;
`

interface Props {
  setCurrentUser(user: User): void;
}

const Top: React.FC<Props> = ({ setCurrentUser }) => {

  return (
    <Wrapper>
      {
        users.map(user => (
          <Link to={`/user/${user.name.toLowerCase()}`} key={user.id}>
            <Information setUser={setCurrentUser} user={user} />
          </Link>
        ))
      }
    </Wrapper>
  )
}

export default Top;
