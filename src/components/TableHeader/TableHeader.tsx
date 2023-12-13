import { StyledMainTableTitle, StyledMainTitlesContainer } from "styles/StyledComponents/Main"

const TableHeader = () => {
  return (
    <StyledMainTitlesContainer>
      <StyledMainTableTitle titleName="post">Пост</StyledMainTableTitle>
      <StyledMainTableTitle titleName="published">Опубликовано</StyledMainTableTitle>
      <StyledMainTableTitle titleName="link">Ссылка</StyledMainTableTitle>
    </StyledMainTitlesContainer>
  )
}

export default TableHeader