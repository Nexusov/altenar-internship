import { StyledPostImg } from "styles/StyledComponents/Image";

export enum ImageTypes {
  Post = 'post',
  Preview = 'preview',
  DragnDrop = 'dragndrop'
}

interface ImageProps {
  type: ImageTypes
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