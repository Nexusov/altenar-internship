import { createContext, useState, useContext } from 'react';
import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE_URL } from 'utils/transformData';

const PhoneContext = createContext({
  isToggled: false,
  color: '#9197A3',
  setColor: (color: string) => {},
  toggleSwitch: () => {},
  imageUrl: '',
  setImageUrl: (imageUrl: string) => {},
  phoneTitle: '',
  phoneDescription: '',
  setPhoneTitle: (phoneTitle: string) => {},
  setPhoneDescription: (phoneDescription: string) => {}
});

export const usePhone = () => useContext(PhoneContext);

export const PhoneProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false)
  const [color, setColor] = useState('#9197A3')
  const [imageUrl, setImageUrl] = useState(DEFAULT_IMAGE_URL)
  const [phoneTitle, setPhoneTitle] = useState('Onion');
  const [phoneDescription, setPhoneDescription] = useState(DEFAULT_DESCRIPTION);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  }

  return (
    <PhoneContext.Provider value={{ isToggled, color, setColor, toggleSwitch, imageUrl, setImageUrl, phoneTitle, phoneDescription, setPhoneTitle, setPhoneDescription }}>
      {children}
    </PhoneContext.Provider>
  );
};

