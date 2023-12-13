import { StyledInputsContainer } from "styles/StyledComponents/InputsContainer";

const InputsContainer = ({ children }) => {
  return (
    <StyledInputsContainer>
      {children}
    </StyledInputsContainer>
  )
}

export default InputsContainer;
