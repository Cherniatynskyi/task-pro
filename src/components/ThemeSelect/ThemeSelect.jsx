import css from './ThemeSelect.module.css';
import sprite from '../../images/sprite.svg';

export const ThemeSelect = () => {
  return (
    <>
      <div className={css.menuTheme}>
        <button className={css.buttonMenu} type="button">
          <p className={css.titleMenuTheme}>Theme</p>
          <div className={css.menuThemeWrap}>
            <svg className={css.iconChevronDown} width="16" height="16">
              <use href={`${sprite}#icon-chevron-down`} />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};
