import { useState, useEffect } from 'react';

import { StyledCharCounter } from 'styles/StyledComponents/CharacterCounter';
import { InputTypes, StyledInput, StyledInputWrapper } from 'styles/StyledComponents/Input';
import { TextStyleTypes } from 'styles/StyledComponents/Text';
import { StyledText } from '../../styles/StyledComponents/Text';
import LinkIcon from 'components/Icons/LinkIcon/LinkIcon';
import { usePhone } from 'components/Phone/PhoneContext';

export interface IINputProps {
  placeholder: string
  type: InputTypes
  name: string
  id: string
  maxLength: number
  isError?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<IINputProps> = ({ placeholder, type, name, id, maxLength, onChange, value }) => {
  const [value, setValue] = useState('');
  const [remaining, setRemaining] = useState(maxLength)

  useEffect(() => {
    setRemaining(maxLength - value.length)
  }, [value, maxLength])

  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.includes("http") || inputValue === '') {
      setValue(inputValue);
    }
  }

  const isError = value.length >= maxLength;

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
            onChange={onChange}
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
            onChange={InputTypes.Url ? handleURLChange : (e) => setValue(e.target.value)}
            isError={isError}
          />
      }
      <StyledCharCounter isError={isError}>{remaining}</StyledCharCounter>
      {isError && <StyledText type={TextStyleTypes.Error}>Название превышает {maxLength} символов</StyledText>}
    </StyledInputWrapper>
  )
}

export default Input