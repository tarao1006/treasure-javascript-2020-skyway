import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Information from './Information'
import User from '../model/user'

const Wrapper = styled.div`
  margin: 0 auto;
`

interface Props {
  setCurrentUser(user: User): void;
}

const Top: React.FC<Props> = ({ setCurrentUser }) => {

  return (
    <Wrapper>
      <Link to="/user/lilith">
        <Information setCurrentUser={setCurrentUser} user={ new User('Lilith', 'red')} />
      </Link>
      <Link to="/user/adam">
        <Information setCurrentUser={setCurrentUser} user={ new User('Adam', 'green')} />
      </Link>
    </Wrapper>
  )
}

export default Top;
