import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <NotFoundImage src='https://cdn.discordapp.com/attachments/561591566045544449/1103756352171544688/404.webp'></NotFoundImage>
    </NotFoundPageContainer>
  )
}

export default NotFoundPage;

export const NotFoundImage = styled.img`
  width: 500px;
  height: 450px;
  border-radius: 5%;
  box-shadow: 0px 5px 21px 19px rgba(9, 9, 9, 0.34);
`

export const NotFoundPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)),
    linear-gradient(77.81deg, rgb(255, 0, 200), rgb(41, 13, 224));
  background-size: 200% 200%;
  animation: background-animation 3s linear infinite;
  
  @keyframes background-animation {
  0% {
    background-position: 10% 0%
  }

  50% {
    background-position: 91% 100%
  }

  100% {
    background-position: 10% 0%
  }
}
`
