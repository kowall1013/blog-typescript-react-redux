//Outter
import { useState } from 'react';
import { Link } from 'react-router-dom';
//Styles and icons
import { Wrapper } from './Navigation.css';
import { IoMdClose, IoIosMenu } from 'react-icons/io';

const navigationData = [
  { id: 1, name: 'start here', to: '/posts' },
  { id: 2, name: 'blog', to: '/blog' },
  { id: 3, name: 'podcast', to: '/podcast' },
  { id: 4, name: 'about', to: '/about' },
];

export const Navigation: React.FC = () => {
  const [fullScrrenMenuIsOpen, setFullScrrenMenuIsOpen] = useState(true);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const navListItem = navigationData.map((item) => {
    return (
      <li key={item.id}>
        <Link to={item.to}>{item.name}</Link>
      </li>
    );
  });

  const handleScreenSize = () => {
    if (window.innerWidth > 550) {
      setFullScrrenMenuIsOpen(true);
    } else {
      setFullScrrenMenuIsOpen(false);
    }
  };

  const handleToggleMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  window.addEventListener('resize', handleScreenSize);

  const fullResolutionScreenMenu = fullScrrenMenuIsOpen && <ul className="menu-list">{navListItem}</ul>;
  const mobileResolutionScreenMenu = !fullScrrenMenuIsOpen && (
    <div>
      <button className="toggle" onClick={handleToggleMenu}>
        <span>{mobileMenuIsOpen ? <IoMdClose /> : <IoIosMenu />}</span>
        <span>MENU</span>
      </button>
      {mobileMenuIsOpen && <ul>{navListItem}</ul>}
    </div>
  );

  return (
    <Wrapper>
      {fullResolutionScreenMenu}
      {mobileResolutionScreenMenu}
    </Wrapper>
  );
};
