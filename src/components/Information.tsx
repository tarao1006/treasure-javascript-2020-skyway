import * as React from 'react';
import styled from 'styled-components';
import User from '../model/user'

const Wrapper = styled.div`
  width: 50%;
  margin: 2px auto;
  padding: 4px;
  border-radius: 12px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: transform 0.25s ease 0s;

  &:hover {
    transform: translateY(-2px);
  }
`

const CircleIcon = styled.div<{color: string}>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: ${p => p.color};
`

interface Props {
  setUser(user: User): void;
  user: User;
}

const Information: React.FC<Props> = ({ setUser, user }) => {

  const handleClick = () => {
    setUser(user)
  }

  return (
    <Wrapper onClick={handleClick}>
      <CircleIcon color={user.color} />
        <div>
          {user.name}
        </div>
    </Wrapper>
  )
}

export default Information;
