import css from './ThemeSelect.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updaterUserTheme } from '../../redux/auth/authThunks';
import { useTranslation } from 'react-i18next';

export const ThemePopup = ({ onSelectClose, isOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const {t} = useTranslation()

  const handleChangeTheme = e => {
    dispatch(updaterUserTheme({ theme: `${e.target.id}` }));
    const selectedTheme = e.target.id;
    localStorage.setItem('theme', selectedTheme);
    onSelectClose();
    
  };

  return (
    <ul
      data-popup="menu"
      className={`${css.menuList} ${!isOpen && css.menuListHidden}`}
    >
      <li
        onClick={handleChangeTheme}
        data-popup="el"
        id="dark"
        className={`${css.menuItem} ${user.theme === 'dark' ? css.activ : ''}`}
      >
        {t('dark')}
      </li>
      <li
        onClick={handleChangeTheme}
        data-popup="el"
        id="light"
        className={`${css.menuItem} ${user.theme === 'light' ? css.activ : ''}`}
      >
        {t('light')}
      </li>
      <li
        onClick={handleChangeTheme}
        data-popup="el"
        id="violet"
        className={`${css.menuItem} ${
          user.theme === 'violet' ? css.activ : ''
        }`}
      >
        {t('violet')}
      </li>
    </ul>
  );
};
