import Button from "components/Button/Button";
import { usePhone } from "components/Phone/PhoneContext";
import { StyledFooter } from "styles/StyledComponents/Footer";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";
import { createPost } from '../../services/postsService';
import { useNavigate } from "react-router-dom";

const CreationFooter = () => {

  const navigate = useNavigate();
  
  const {shopName, shopLink, isToggled, color, imageUrl, phoneTitle, phoneDescription} = usePhone()

  const handlePostCreate = async () => {
    try {
      await createPost({shopName, shopLink, postDate: '', postStatus: '', postAuthor: '', postImgURL: '', isDark: isToggled, postColor: color, postTitle: phoneTitle, postDescription: phoneDescription})
      navigate('/')
    } catch (error) {
      alert('Error creating post')
    }
  }

  return (
    <StyledFooter>
      <Button text="Добавить" onClick={handlePostCreate} />
      <StyledText type={TextStyleTypes.Secondary}>Подборка не будет опубликована. Вы сможете добавить <br />
        продукты и внести правки</StyledText>
    </StyledFooter>
  )
}

export default CreationFooter;