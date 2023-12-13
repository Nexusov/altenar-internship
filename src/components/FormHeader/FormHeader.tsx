import { StyledFormTextWrapper } from "styles/StyledComponents/Header";

export interface IFormHeaderProps {
  children: React.ReactNode
}

const FormHeader: React.FC<IFormHeaderProps> = ({ children }) => {
  return (
    <StyledFormTextWrapper>
      {children}
    </StyledFormTextWrapper>
  )
}

export default FormHeader;