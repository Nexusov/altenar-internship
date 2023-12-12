import styled, { css } from "styled-components";
import { colors } from "styles/Variables";
import { primaryStyle } from "./Text";

export enum DragnDropStatuses {
  Default = 'default',
  Active = 'active',
  Loading = 'loading',
  Uploaded = 'uploaded',
  Error = 'error',
}

export interface IDragnDropProps {
  status?: DragnDropStatuses
}

export const BaseDragnDropStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;
  border-radius: 4px;
  border: 1px dashed ${colors.dragdropBorder};
  padding: 35px 0;
  gap: 16px;

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  img {
    width: 47px;
    height: 47px;
  }
`

export const activeStyle = css`
  background: ${colors.dragdropActive};
  border-color: ${colors.primary}
`;

export const errorStyle = css`
  border-color: ${colors.dragdropError};
`;

export const loadingStyles = css`
  border: 1px solid #E0E0E0;
  align-items: center;
  border-bottom: 4px solid #E5E5E5;

  img {
    opacity: 0.3;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: -1px;
    height: 4px;
    width: 22.84%;
    border-radius: 25px;
    background: ${colors.primary};
  }
`;

export const uploadedStyle = css`
  border: 1px solid ${colors.dragdropBorder};
  align-items: center;
`;

export const StyledDragnDrop = styled(BaseDragnDropStyles)<IDragnDropProps>`
  ${props => props.status === DragnDropStatuses.Default && BaseDragnDropStyles}
  ${props => props.status === DragnDropStatuses.Active && activeStyle}
  ${props => props.status === DragnDropStatuses.Loading && loadingStyles}
  ${props => props.status === DragnDropStatuses.Uploaded && uploadedStyle}
  ${props => props.status === DragnDropStatuses.Error && errorStyle}
`;


export const StyledDragnDropTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledDragnDropLabel = styled.label`
  ${primaryStyle}
`
