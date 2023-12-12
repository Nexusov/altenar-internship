import Phone from "components/Phone/Phone";
import { StyledPreviewSection } from "styles/StyledComponents/PreviewSection";

const PreviewSection = () => {
  return (
    <StyledPreviewSection className="main-content__item preview">
      <Phone />
    </StyledPreviewSection>
  )
}

export default PreviewSection;