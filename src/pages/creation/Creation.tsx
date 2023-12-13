import FixedNavHeader from "components/FixedNavHeader/FixedNavHeader";
import MainCreation from "components/Main/MainCreation";
import { PhoneProvider } from "components/Phone/PhoneContext";

const Creation = () => {
  return (
    <>
      <PhoneProvider>
        <FixedNavHeader />
        <MainCreation />
      </PhoneProvider>
    </>
  )
}

export default Creation;