import { createContext, useState, useContext } from 'react';

const PhoneContext = createContext({
  isToggled: false,
  color: '#9197A3',
  setColor: (color: string) => {},
  toggleSwitch: () => {}
});

export const usePhone = () => useContext(PhoneContext);

export const SwitcherProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [color, setColor] = useState('#9197A3');

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <PhoneContext.Provider value={{ isToggled, color, setColor, toggleSwitch }}>
      {children}
    </PhoneContext.Provider>
  );
};

