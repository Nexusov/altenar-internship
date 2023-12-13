import { useState } from "react";

export interface ITextareProps {
  placeholder: string
  name: string
  id: string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<ITextareProps> = ({ placeholder, name, id, onChange }) => {

  const [value, setValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    onChange && onChange(e)
  }

  return (
    <textarea 
      placeholder={placeholder} 
      autoComplete="off" 
      name={name} 
      id={id}
      value={value}
      onChange={handleOnChange}
      />
  )
}

export default Textarea;