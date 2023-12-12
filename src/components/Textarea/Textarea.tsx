export interface ITextareProps {
  placeholder: string
  name: string
  id: string
}

const Textarea: React.FC<ITextareProps> = ({ placeholder, name, id }) => {
  return (
    <textarea placeholder={placeholder} autoComplete="off" name={name} id={id} />
  )
}

export default Textarea;