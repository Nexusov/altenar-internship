import { BaseTitleStyles } from 'styles/StyledComponents/Title';
import styled from 'styled-components';
import { colors, margins } from 'styles/Variables';

export const CreationFormContainer = styled.section`
  overflow-y: auto;
  width: 39.94%;
  height: 100vh;

  &::-webkit-scrollbar {
    width: 4px; 

    &-thumb {
      background-color: ${colors.scrollBarColor}; 
      border-radius: 2px;
      
      &:hover {
        background-color: darken(${colors.scrollBarColor}, 5);
      }
    }
    
  }
`;

export const StyledMainCreationHeader = styled.div`
  padding: 132px 150px 0 ${margins.general};
  background: ${colors.secondaryPageColor};
  padding-bottom: 24px;
`;

export const StyledCreationTitle = styled.h1`
  ${BaseTitleStyles}
  margin-bottom: 4px;
  font-weight: 500;
  letter-spacing: 0.15px;
`

export const StyledCreationContentContainer = styled.div`
  padding: 0 32px 32px ${margins.general};
`

