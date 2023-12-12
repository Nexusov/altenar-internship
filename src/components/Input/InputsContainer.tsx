import { StyledInputsContainer } from "styles/StyledComponents/InputsContainer";

const InputsContainer = ({ children }) => {
  return (
    <StyledInputsContainer className="form-block__inputs-container inputs-container">
      {children}
    </StyledInputsContainer>
  )
}

export default InputsContainer;
