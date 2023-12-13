import { createContext, useState, useContext, useRef } from 'react';
import { TimeoutsOptions } from 'retry';
import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE_URL, DEFAULT_POST_TITLE } from 'utils/transformData';

const PhoneContext = createContext({
  isToggled: false,
  color: '#9197A3',
  setColor: (color: string) => { },
  toggleSwitch: () => { },
  imageUrl: '',
  setImageUrl: (imageUrl: string) => { },
  phoneTitle: '',
  phoneDescription: '',
  setPhoneTitle: (phoneTitle: string) => { },
  setPhoneDescription: (phoneDescription: string) => { },
  setShopName: (shopName: string) => { },
  setShopURL: (shopLink: string) => { },
  shopName: '',
  shopLink: '',
  updateColor: (color: string) => {}
});

export const usePhone = () => useContext(PhoneContext);

export const PhoneProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false)
  const [color, setColor] = useState('#9197A3')
  const [imageUrl, setImageUrl] = useState(DEFAULT_IMAGE_URL)
  const [phoneTitle, setPhoneTitle] = useState(DEFAULT_POST_TITLE)
  const [phoneDescription, setPhoneDescription] = useState(DEFAULT_DESCRIPTION)
  const [shopName, setShopName] = useState('')
  const [shopLink, setShopURL] = useState('')
  const colorDebounce = useRef(0)

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  }

  const updateColor = (newColor: string) => {
    if (colorDebounce.current) {
      clearTimeout(colorDebounce.current)
    }

    colorDebounce.current = window.setTimeout(() => {
      setColor(newColor)
      colorDebounce.current = 0
    }, 0)
  }

  const providerData = { isToggled, color, setColor, updateColor, toggleSwitch, imageUrl, setImageUrl, phoneTitle, phoneDescription, setPhoneTitle, setPhoneDescription, setShopName, setShopURL, shopName, shopLink }

  return (
    <PhoneContext.Provider value={providerData}>
      {children}
    </PhoneContext.Provider>
  );
};

