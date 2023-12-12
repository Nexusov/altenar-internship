import { StyledFormTextWrapper } from "styles/StyledComponents/Header";

export interface IFormHeaderProps {
  children: React.ReactNode
}

const FormHeader: React.FC<IFormHeaderProps> = ({ children }) => {
  return (
    <StyledFormTextWrapper className="form-block__header text-wrapper">
      {children}
    </StyledFormTextWrapper>
  )
}

export default FormHeader;