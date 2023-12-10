import styled from "styled-components";
import { widths } from "styles/Variables";
import { colors } from '../Variables';

export const StyledPost= styled.article`
  display: flex;
  flex-direction: row;
`

export const StyledPostImgContainer= styled.div`
  width: 74px;
  height: 71px;
  border-radius: 4px;
  background: #C4C4C4;
  overflow: hidden;
`

export const StyledPostPreview= styled.div`
  display: flex;
  align-items: center;
  width: ${widths.postColumn};
  gap: 16px;
`

export const StyledPostPublishInfoContainer = styled.div`
  display: flex;
  width: ${widths.publishedColumn};
  gap: 8px;
`

export const StyledPostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledPublishInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`

export const StyledPostControls = styled.div`
  display: flex;
  width: ${widths.linkColumn};
  align-items: center;
`

export const StyledPostStatusesContainer = styled.div`
  margin-top: 14px;
`

export const StyledPostPublishInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`

export const StyledPostControlsContainer = styled.div`
  display: flex;
  width: ${widths.linkColumn};
  align-items: center;
`

export const StyledPostControlsItem = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: relative;

  &:hover svg path {
    fill: ${colors.primary};
  }

  &:hover svg rect {
    /* fill-opacity: 0.04; */
  }

  &:active svg rect {
    fill-opacity: 0.24;
  }
`



