import { StyledMain, StyledMainColumns } from "styles/StyledComponents/Main";
import TableHeader from "components/TableHeader/TableHeader";
import Posts from "components/Posts/Posts";


const Main = () => {
  return (
    <StyledMain className="main-content">
      <StyledMainColumns className="main-content__columns">
        <TableHeader />
        <Posts />
      </StyledMainColumns>
    </StyledMain>
  )
}

export default  Main