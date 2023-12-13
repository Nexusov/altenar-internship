import { createContext, useState, useContext } from 'react';
import { DEFAULT_IMAGE_URL } from 'utils/transformData';

const PhoneContext = createContext({
  isToggled: false,
  color: '#9197A3',
  setColor: (color: string) => {},
  toggleSwitch: () => {},
  imageUrl: '',
  setImageUrl: (imageUrl: string) => {}
});

export const usePhone = () => useContext(PhoneContext);

export const PhoneProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false)
  const [color, setColor] = useState('#9197A3')
  const [imageUrl, setImageUrl] = useState(DEFAULT_IMAGE_URL)

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  }

  return (
    <PhoneContext.Provider value={{ isToggled, color, setColor, toggleSwitch, imageUrl, setImageUrl }}>
      {children}
    </PhoneContext.Provider>
  );
};

