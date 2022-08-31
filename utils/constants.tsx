import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiLipstick } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad } from 'react-icons/fa';
import { AiOutlineLaptop } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';

export const topics = [
  {
    name: 'comedy',
    icon: <BsEmojiSunglasses />,
  },
  {
    name: 'coding',
    icon: <BsCode />,
  },
  {
    name: 'Tech',
    icon: <AiOutlineLaptop />
  },
  
  {
    name: 'gaming',
    icon: <FaGamepad />,
  },
  {
    name: 'food',
    icon: <GiCakeSlice />,
  },
  {
    name: 'dance',
    icon: <GiGalaxy />,
  },
  {
    name: 'beauty',
    icon: <GiLipstick />,
  },
  {
    name: 'animals',
    icon: <FaPaw />,
  },
  {
    name: 'sports',
    icon: <FaMedal />,
  },
{
    name: 'other',
    icon: <BiBookAdd />
  },
];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'Vios for Good','Advertise','Developers','Transparency',' Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]