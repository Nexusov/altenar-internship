import { useState } from 'react';

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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IINputProps> = ({ placeholder, type, name, id, maxLength, onChange }) => {
  const [value, setValue] = useState('');

  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.includes("http") || inputValue === '') {
      setValue(inputValue)
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange && onChange(e)
  }

  const isError = value.length >= maxLength
  const remaining = maxLength - value.length

  return (
    <StyledInputWrapper>
      {type === InputTypes.Url && <LinkIcon />}
      {
        type === InputTypes.PhoneText ?
          <StyledInput
            placeholder={placeholder}
            autoComplete="off"
            type={type}
            name={name}
            id={id}
            maxLength={maxLength}
            value={value}
            onChange={handleOnChange}
            isError={isError}
          />
          :
          <StyledInput
            placeholder={placeholder}
            autoComplete="off"
            type={type}
            name={name}
            id={id}
            maxLength={maxLength}
            value={value}
            onChange={type === InputTypes.Url ? handleURLChange : handleOnChange}
            isError={isError}
          />
      }
      <StyledCharCounter isError={isError}>{remaining}</StyledCharCounter>
      {isError && <StyledText type={TextStyleTypes.Error}>Название превышает {maxLength} символов</StyledText>}
    </StyledInputWrapper>
  )
}

export default Input