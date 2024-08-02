import css from './Welcome.module.css'
import sprite from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';

export const WelcomeNav = () => {
  return (
    <nav className={css.welcomeNav}>
        <div className={css.logo}>
            <svg className={css.welcomeLogoIcon}>
                <use href={`${sprite}#icon-logo2`} />
            </svg>
            <span className={css.welcomeLogoText}>Task Pro</span>
        </div>
        <div className={css.welcomeAuthWrap}>
            <NavLink to="/auth/login" className={css.welcomeLoginBtn}>
                Log In
            </NavLink>
            <NavLink to="/auth/register" className={css.welcomeRegisterBtn}>
                Registration
            </NavLink>
        </div>
    </nav>
  )
}
