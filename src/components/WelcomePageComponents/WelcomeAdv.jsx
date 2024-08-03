import css from './Welcome.module.css'

export const WelcomeAdv = () => {
  return (
    <section className={css.adv}>
        <div className={css.content}>
            <div className={css.featuresTitleWrap}>
                <h2 className={css.featuresTitle}>Workflows for any large or small project</h2>
            </div>
            <ul className={css.advList}>
                <li className={css.advCard}>
                    <div className={css.cardTextWrap}>
                        <h3>Project management</h3>
                        <p>Organize tasks, track deadlines, and bring team members together with Task Pro.</p>
                    </div>
                </li>
                <li className={css.advCard}>
                    <div className={css.cardTextWrap}>
                        <h3>Meetings</h3>
                        <p>Team meetings can be more productive, more effective, and even more lively.</p>
                    </div>
                </li>
                <li className={css.advCard}>
                    <div className={css.cardTextWrap}>
                        <h3>Task management</h3>
                        <p>Use Task Pro to track and complete tasks, manage workflows, and combine them into successful projects as a collaborative team effort.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
