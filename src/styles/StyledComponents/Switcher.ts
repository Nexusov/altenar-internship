import styled from "styled-components";
import { colors } from "styles/Variables";

export const StyledSwitcherContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 24px 0 5px 0;
`

export const StyledSwitcher = styled.label`
  width: 50px;
  height: 23px;
  position: relative;
  cursor: pointer;

  input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;

    &:checked + span {
      background-color: #E0E0E0;

      &::before {
        transform: translateX(26px);
        filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14)) drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.20)); 
      }
    }
  }

  span {
    position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.87);
      transition: background-color 0.4s, transform 0.4s;
      border-radius: 33px;

      &::before {
        position: absolute;
        content: "";
        height: 17px;
        width: 17px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
      }
  }
`