import { CreationFormContainer, StyledMainCreationHeader, StyledCreationTitle } from "styles/StyledComponents/CreationForm";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";
import MainCreationHeader from "./MainCreationHeader";
import CreationContent from "components/CreationContent/CreationContent";

const MainCreation = () => {
  return (
    <>
      <CreationFormContainer className="main-content__item add-form">
        <MainCreationHeader />
        <CreationContent />
      </CreationFormContainer>
      <section className="main-content__item preview">
        <div className="preview__phone phone">
          <div className="phone__top-bar top-bar">
            <div className="top-bar__item top-bar-time">
              <svg width="29" height="9" viewBox="0 0 29 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.061 6.79V8H0.385V7.043L3.443 4.139C3.78767 3.809 4.01867 3.523 4.136 3.281C4.26067 3.03167 4.323 2.786 4.323 2.544C4.323 2.18467 4.202 1.90967 3.96 1.719C3.718 1.52833 3.36233 1.433 2.893 1.433C2.10833 1.433 1.507 1.70067 1.089 2.236L0.088 1.466C0.388667 1.06267 0.792 0.751 1.298 0.531C1.81133 0.303666 2.38333 0.19 3.014 0.19C3.85 0.19 4.51733 0.388 5.016 0.784C5.51467 1.18 5.764 1.719 5.764 2.401C5.764 2.819 5.676 3.21133 5.5 3.578C5.324 3.94467 4.98667 4.36267 4.488 4.832L2.431 6.79H6.061ZM12.4633 6.79V8H6.78734V7.043L9.84534 4.139C10.19 3.809 10.421 3.523 10.5383 3.281C10.663 3.03167 10.7253 2.786 10.7253 2.544C10.7253 2.18467 10.6043 1.90967 10.3623 1.719C10.1203 1.52833 9.76468 1.433 9.29534 1.433C8.51068 1.433 7.90934 1.70067 7.49134 2.236L6.49034 1.466C6.79101 1.06267 7.19434 0.751 7.70034 0.531C8.21368 0.303666 8.78568 0.19 9.41634 0.19C10.2523 0.19 10.9197 0.388 11.4183 0.784C11.917 1.18 12.1663 1.719 12.1663 2.401C12.1663 2.819 12.0783 3.21133 11.9023 3.578C11.7263 3.94467 11.389 4.36267 10.8903 4.832L8.83334 6.79H12.4633ZM14.1467 3.886C13.8974 3.886 13.6847 3.80167 13.5087 3.633C13.3327 3.457 13.2447 3.237 13.2447 2.973C13.2447 2.70167 13.329 2.48167 13.4977 2.313C13.6737 2.14433 13.89 2.06 14.1467 2.06C14.4034 2.06 14.616 2.14433 14.7847 2.313C14.9607 2.48167 15.0487 2.70167 15.0487 2.973C15.0487 3.237 14.9607 3.457 14.7847 3.633C14.6087 3.80167 14.396 3.886 14.1467 3.886ZM14.1467 8.077C13.8974 8.077 13.6847 7.99267 13.5087 7.824C13.3327 7.648 13.2447 7.428 13.2447 7.164C13.2447 6.89267 13.329 6.67267 13.4977 6.504C13.6737 6.33533 13.89 6.251 14.1467 6.251C14.4034 6.251 14.616 6.33533 14.7847 6.504C14.9607 6.67267 15.0487 6.89267 15.0487 7.164C15.0487 7.428 14.9607 7.648 14.7847 7.824C14.6087 7.99267 14.396 8.077 14.1467 8.077ZM22.8382 6.251H21.4742V8H20.0882V6.251H15.8642V5.261L19.6592 0.299999H21.1882L17.6132 5.041H20.1322V3.49H21.4742V5.041H22.8382V6.251ZM28.7539 0.299999V1.257L25.7619 8H24.2329L27.1259 1.51H24.1009V2.819H22.7699V0.299999H28.7539Z"
                  fill="white" />
              </svg>
            </div>
            <div className="top-bar__item top-bar-indicators">
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.05245 0C6.82733 0 8.62004 0.698998 10.1114 1.97043L9.43835 2.71829C8.20919 1.68322 6.65593 1.11457 5.05245 1.11457C3.44968 1.11457 1.8984 1.6816 0.671574 2.71324L0 1.96538C1.48933 0.697015 3.27935 0 5.05245 0ZM5.05245 2.62075C6.25065 2.62075 7.43698 3.06265 8.4049 3.86766L7.6847 4.66816C6.94148 4.06526 6.01084 3.73442 5.05245 3.73442C4.09604 3.73442 3.16646 4.064 2.42286 4.66492L1.70359 3.86369C2.67132 3.06138 3.85639 2.62075 5.05245 2.62075ZM5.05245 5.20598C5.61418 5.20598 6.186 5.41331 6.67392 5.79157L5.05245 7.59396L3.43257 5.78941C3.91996 5.41241 4.49107 5.20598 5.05245 5.20598Z"
                  fill="white" />
              </svg>
              <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M21 4C21 4.81421 20.5429 5.47368 19.7143 5.47368V2.52632C20.5429 2.52632 21 3.18596 21 4ZM19.2857 1.26316V6.73684V6.74404C19.2857 7.44147 18.7099 8 18 8H1.28573C0.57567 8 0 7.44147 0 6.74404V6.73684V1.26316C0 0.565542 0.57567 0 1.28573 0H18C18.7099 -1.79937e-07 19.2857 0.565542 19.2857 1.26316ZM1.28573 0.421052C0.813019 0.421052 0.428587 0.79892 0.428587 1.26316V6.73684C0.428587 7.20126 0.813019 7.57895 1.28573 7.57895H18C18.4727 7.57895 18.8571 7.20126 18.8571 6.73684V1.26316C18.8571 0.79892 18.4727 0.421052 18 0.421052H1.28573ZM0.857147 1.26316V6.73684C0.857147 6.96914 1.04945 7.15789 1.28573 7.15789H18C18.2363 7.15789 18.4286 6.96914 18.4286 6.73684V1.26316C18.4286 1.03104 18.2363 0.842105 18 0.842105H1.28573C1.04945 0.842105 0.857147 1.03104 0.857147 1.26316Z"
                  fill="white" />
              </svg>
            </div>
          </div>
          <div className="phone__image-container image-container">
            <img src="../assets/img/image 12.jpg" alt="Post image" />
          </div>
          <div className="phone__description-container description-container">
            <p className="description-container__item preview-title">Onion</p>
            <p className="description-container__item preview-text text--primary">The useful properties of onions
              are versatile. It is a powerful antimicrobial that effectively fights internal and
              external infection. Onions have antiviral, antibacterial, anthelmintic, antifungal,
              disinfectant properties. In case of colds, it is not only consumed internally, but
              also left indoors in cut form to disinfect the air. </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainCreation;