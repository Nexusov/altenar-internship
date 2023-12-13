import styled from "styled-components";
import { colors, margins } from "styles/Variables";

export const StyledPreviewSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  left: calc(39.4% + 7px);
  margin: 16px 8px 16px 16px;
  background-color: ${colors.previewBackgroundColor};
  border-radius: 16px;
  flex-shrink: 0;
  z-index: 200;
`;