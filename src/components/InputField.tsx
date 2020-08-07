import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Input = styled.input`
  width: 90%;
  height: 24px;
`

const Button = styled.div`
  cursor: pointer;
  width: 10%;
`

interface Props {
  onClick(value: string): void;
}

const InputField: React.FC<Props> = ({ onClick }) => {

  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleClick = () => {
    onClick(value);
    setValue('');
  }

  return (
    <Wrapper>
      <Input value={value} onChange={handleChange} placeholder="Input message." />
      <Button onClick={handleClick}>Send</Button>
    </Wrapper>
  )
};

export default InputField;
