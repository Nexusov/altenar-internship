import { StyledMain, StyledMainColumns } from "styles/StyledComponents/Main";
import TableHeader from "components/TableHeader/TableHeader";
import Posts from "components/Posts/Posts";


const Main = () => {
  return (
    <StyledMain>
      <StyledMainColumns>
        <TableHeader />
        <Posts />
      </StyledMainColumns>
    </StyledMain>
  )
}

export default  Main