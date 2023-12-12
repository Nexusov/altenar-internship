import FixedNavHeader from "components/FixedNavHeader/FixedNavHeader";
import MainCreation from "components/Main/MainCreation";
import { SwitcherProvider } from "components/Phone/PhoneContext";

const Creation = () => {
  return (
    <>
      <SwitcherProvider>
        <FixedNavHeader />
        <MainCreation />
      </SwitcherProvider>
    </>
  )
}

export default Creation;