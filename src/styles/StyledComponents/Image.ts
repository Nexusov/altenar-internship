import styled from "styled-components";

export const StyledPostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledPreviewImg = styled.img`
  ${StyledPostImg}
`;

export const StyledDragnDropImg = styled.img`
  ${StyledPostImg}
`;