import css from './Welcome.module.css'
import pres from '../../images/welcome/pres.png'
import { NavLink } from 'react-router-dom';

export const WelcomeHero = () => {
  return (
    <section className={`${css.hero}`}>
        <div className={css.content}>
            <div className={css.heroWrap}>
              <div className={css.titleWrap}>
                  <h1 className={css.title}>Free Useful task manager</h1>
                  <p className={css.subText}>Supercharge your productivity and take control of your tasks with Task
                    Pro - Don't wait, start achieving your goals now!</p>
                  <NavLink to="/auth/login" className={css.heroBtn}>Start now</NavLink>
              </div>
              <img src={pres} alt="screens" className={css.heroImg}/>
            </div>
        </div>
    </section>
  )
}
