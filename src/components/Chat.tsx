import React from 'react'
import styled from 'styled-components'
import InputField from './InputField'

const Wrapper = styled.div`
  width: 45%;
  margin: 0 auto;
  background: white;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  min-height: 500px;
  border: solid 1px gray;
  width: 100%;
`

const Chat: React.FC<{}> = () => {

  const handleClick = (value: string): void => {
    console.log(value);
  }

  return (
    <Wrapper>
      <Content />
      <InputField onClick={handleClick} />
    </Wrapper>
  )
}

export default Chat
