import { useState, useEffect } from 'react';

import { StyledCharCounter } from 'styles/StyledComponents/CharacterCounter';
import { InputTypes, StyledInput, StyledInputWrapper } from 'styles/StyledComponents/Input';
import { TextStyleTypes } from 'styles/StyledComponents/Text';
import { StyledText } from '../../styles/StyledComponents/Text';
import LinkIcon from 'components/Icons/LinkIcon/LinkIcon';

export interface IINputProps {
  placeholder: string
  type: InputTypes
  name: string
  id: string
  maxLength: number
  isError?: boolean
}

const Input: React.FC<IINputProps> = ({ placeholder, type, name, id, maxLength }) => {
  const [value, setValue] = useState('')
  const [remaining, setRemaining] = useState(maxLength)

  useEffect(() => {
    setRemaining(maxLength - value.length)
  }, [value, maxLength])

  const isError = value.length >= maxLength;

  return (
    <StyledInputWrapper>
      {type === InputTypes.Url && <LinkIcon />}
      <StyledInput
        placeholder={placeholder}
        autoComplete="off"
        type={type}
        name={name}
        id={id}
        maxLength={maxLength} 
        value={value}
        onChange={(e) => setValue(e.target.value)} 
        isError={isError}
      />
      <StyledCharCounter isError={isError}>{remaining}</StyledCharCounter>
      {isError && <StyledText type={TextStyleTypes.Error}>Название превышает 30 символов</StyledText>}
    </StyledInputWrapper>
  )
}

export default Input;