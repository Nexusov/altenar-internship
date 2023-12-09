import styled from "styled-components";
import { margins } from "styles/Variables";
import { widths } from "styles/Variables";
import { primaryStyle } from "./Text";

interface StyledMainTableTitleProps {
  titleName: 'post' | 'published' | 'link'
}

export const StyledMain = styled.main`
  margin: 0 ${margins.general};
  margin-bottom: 62px;
`

export const StyledMainColumns = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledMainTitlesContainer = styled.div`
  display: flex;
  margin-bottom: 33px;
`

export const StyledMainTableTitle = styled.p<StyledMainTableTitleProps>`
  ${primaryStyle} 

  display: flex;
  flex-direction: column;

  width: ${props => {
    switch (props.titleName) {
      case 'post':
        return widths.postColumn;
      case 'published':
        return widths.publishedColumn;
      case 'link':
        return widths.linkColumn;
      default:
        return 'auto';
    }
  }};
`;
