import styled from 'styled-components';
import { colors } from 'styles/Variables';

export const StyledColorPicker = styled.div`
  position: relative;
  height: 46px;
`;

export const StyledColorPickerCircle = styled.input.attrs({ type: 'color' })`
  width: 46px;
  height: 46px;
  border-radius: 48px;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  transition: padding 0.2s ease-in;
  appearance: none;
  -webkit-appearance: none;
  
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }

  &:hover {
    padding: 3px;
    border: 1px solid rgba(196, 196, 196, 1);
  }

  &:hover + .colorpicker__label {
    opacity: 1;
  }

  &:focus {
    padding: 3px;
    border: 1px solid ${colors.primary};
  }
`;

export const StyledColorPickerLabel = styled.label`
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(-25%);
  margin-top: 6px;
  padding: 4px 8px;
  opacity: 0;
  background: rgba(97, 97, 97, 0.9);
  border-radius: 4px;
  transition: opacity 0.3s;
  color: white;
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
`;