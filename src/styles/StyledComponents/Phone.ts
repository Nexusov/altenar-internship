import styled from "styled-components";

export const StyledPhone = styled.div`
  width: 356px;
  height: 633px;
  border-radius: 45px;
  border: 14px solid #E4E4E4;
  overflow: hidden;
  position: relative;
`;

export const StyledPhoneBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 21px 24px 0 24px;
  z-index: 2;
`

export const StyledPhoneBarSVGGroup = styled.div`
  display: flex;
  gap: 7.89px;
`

export const StyledPhoneImage = styled.div`
  border-radius: 40px 40px 0 0;
  background: #E28D8D;
`

export const StyledPhoneDescription = styled.div<{color: string}>`
    height: 355px; 
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 37px 24px 36px 24px;
    background: linear-gradient(180deg,
      rgba(0, 0, 0, 0.00) 0%,
      ${props => props.color} 22.4%,
      ${props => props.color} 100%);  
`



