import { StyledCreationSection, StyledMainCreationHeader, StyledCreationTitle } from "styles/StyledComponents/CreationForm";
import MainCreationHeader from "./MainCreationHeader";
import CreationContent from "components/CreationContent/CreationContent";
import PreviewSection from "components/PreviewSection/PreviewSection";

const MainCreation = () => {
  return (
    <>
      <StyledCreationSection>
        <MainCreationHeader />
        <CreationContent />
      </StyledCreationSection>
      <PreviewSection />
    </>
  )
}

export default MainCreation;