import css from './Welcome.module.css'
import { NavLink } from 'react-router-dom';

export const WelcomeFeedback = () => {
  return (
    <section className={css.feedback}>
        <div className={css.content}>
            <div className={css.formWrap}>
                <h2 className={css.feedbakcTitle}>Get started with Task Pro today</h2>
                <NavLink to="/auth/login" className={css.heroBtn}>Start now</NavLink>
            </div>
        </div>
    </section>
  )
}
