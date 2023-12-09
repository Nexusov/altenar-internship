interface ImageProps {
  src: string,
  alt: string,
}

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="post__img" />
  )
}

export default Image;