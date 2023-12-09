import { StyledMainTableTitle, StyledMainTitlesContainer } from "styles/StyledComponents/Main"

const TableHeader = () => {
  return (
    <StyledMainTitlesContainer className="main-content__titles titles">
      <StyledMainTableTitle titleName="post" className="titles__item table-title--post-column text--primary">Пост</StyledMainTableTitle>
      <StyledMainTableTitle titleName="published" className="titles__item table-title--published-column text--primary">Опубликовано</StyledMainTableTitle>
      <StyledMainTableTitle titleName="link" className="titles__item table-title--link-column text--primary">Ссылка</StyledMainTableTitle>
    </StyledMainTitlesContainer>
  )
}

export default TableHeader