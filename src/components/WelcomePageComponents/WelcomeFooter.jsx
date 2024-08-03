import css from './Welcome.module.css'
import sprite from '../../images/sprite.svg';

export const WelcomeFooter = () => {
  return (
    <footer className={css.footer}>
        <div className={css.content}>
            <div className={css.footerWrap}>
                <div className={css.logo}>
                    <svg className={css.welcomeLogoIcon}>
                        <use href={`${sprite}#icon-logo2`} />
                    </svg>
                    <span className={css.footerLogoText}>Task Pro</span>
                </div>
                <ul className={css.footerFAQlist}>
                    <li className={css.faqItem}>
                        <h3>About TaskPro</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tenetur?</p>
                    </li>
                    <li className={css.faqItem}>
                        <h3>Help</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li className={css.faqItem}>
                        <h3>Contacts</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                </ul>
                <a href='https://github.com/Cherniatynskyi' rel="noreferrer" target='_blank'>© Mark Cherniatynskyi, 2024</a>
            </div>
        </div>
    </footer>
  )
}
