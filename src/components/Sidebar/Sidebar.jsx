import css from './Sidebar.module.css';
import sprite from '../../images/sprite.svg';
import pot from '../../images/need-help/pot.png';
import pot2x from '../../images/need-help/pot2x.png';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Board } from './Board/Board';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeSidebar } from '../../redux/modalSlice';
import { selectBoards } from '../../redux/board/selectors';
import { useEffect } from 'react';
import { fetchBoards } from '../../redux/board/boardThunks';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const [listRef] = useAutoAnimate();

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const { sideBarIsOpen } = useSelector(state => state.modal);

  const handleAddBoard = () => {
    dispatch(openModal({ content: 'add-board' }));
  };

  const handleNeddHelp = () => {
    dispatch(openModal({ content: 'need-help' }));
  };
  const handleCloseSidebar = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeSidebar());
    }
  };

  const handleLogout = () => {
    dispatch(openModal({ content: 'warning-logout' }));
  };
  return (
    <div
      onClick={e => handleCloseSidebar(e)}
      className={`${sideBarIsOpen && css.sidebarBackdrop}`}
    >
      <div className={`${css.sideBar} ${sideBarIsOpen && css.sideBarOpened}`}>
        {/* logo, title */}
        <div className={css.titleBox}>
          <div className={css.iconBox}>
            <div className={css.logoIconContainer}>
              <svg className={css.iconLogo} width="16" height="16">
                <use href={`${sprite}#icon-logo`} />
              </svg>
            </div>
            <h2 className={css.title}>Task Pro</h2>
          </div>
          <div className={css.bordBox}>
            <h3 className={css.bordTitle}>{t("sb.title")}</h3>
            {/* button create */}
            <div className={css.buttonBox}>
              <span className={css.buttonText}>{t('sb.createbutton')}</span>
              <button onClick={handleAddBoard} className={css.buttonCreate}>
                <svg className={css.iconCreate} width="22" height="22">
                  <use href={`${sprite}#icon-plus`} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {boards.length > 0 && (
          <ul className={css.bordList} ref={listRef}>
            {boards.map(board => (
              <Board key={board._id} board={board}></Board>
            ))}
          </ul>
        )}
        {/* need help */}
        <div className={css.helpBox}>
          <div className={css.helpTextBox}>
            {boards.length <= 2 && (
              <>
                <picture className={css.imgHelp}>
                  <source srcSet={`${pot} 1x, ${pot2x} 2x`} />
                  <img srcSet={`${pot} 1x`} alt="pot" />
                </picture>
                <p className={css.helpText}>
                  {t("sb.help-1st")}<br></br>
                  <span className={css.helpTextLink}>TaskPro</span>{t("sb.help-2nd")}
                </p>
              </>
            )}
            <button onClick={handleNeddHelp} className={css.buttonHelp}>
              <svg className={css.iconHelp} width="20" height="20">
                <use href={`${sprite}#icon-help`} />
              </svg>
              <p className={css.helpButtonText}>{t("sb.btn-text")}</p>
            </button>
          </div>
          {/* logout */}
          <button onClick={handleLogout} className={css.buttonLogOut}>
            <svg className={css.iconLogOut} width="32" height="32">
              <use href={`${sprite}#icon-login`} />
            </svg>
            <p className={css.logOutButtonText}>{t("sb.logout-text")}</p>
          </button>
        </div>
      </div>
    </div>
  );
};
