import { StyledPostImg } from "styles/StyledComponents/Image";

interface ImageProps {
  type: 'post' | 'preview' | 'dragndrop'
  src: string,
  alt: string,
}

export const Image: React.FC<ImageProps> = ({ src, alt, type }) => {
  switch (type) {
    case 'post':
      return <StyledPostImg src={src} alt={alt} />;
    default:
      return null; 
  }
}

export default Image;