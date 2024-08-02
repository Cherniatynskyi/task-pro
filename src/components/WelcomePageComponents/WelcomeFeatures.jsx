import css from './Welcome.module.css'
import boards from '../../images/welcome/boards.png'
import lists from '../../images/welcome/lists.png'
import cards from '../../images/welcome/cards.png'
import { useState } from 'react'

export const WelcomeFeatures = () => {
  const previews = {'boards': boards, 'lists': lists, 'cards': cards}
  const [selected, setSelected] = useState('boards')

  const selectFeature = (e) =>{
    if(e.currentTarget.id === selected) return 
    setSelected(e.currentTarget.id)
  }
  return (
    <section className={css.features}>
        <div className={css.featuresTitleWrap}>
            <h2 className={css.featuresTitle}>Productive system</h2>
            <p>Simple, flexible and powerful. Only whiteboards, lists and cards are needed to get a clear picture of who is doing what work and what needs to be done. Learn more in our</p>
        </div>
        <div className={css.featuresBody}>
            <ul className={css.controlsList}>
                <li onClick={(e) => selectFeature(e)} className={`${css.controlCard} ${selected === 'boards' && css.active}`} id='boards'>
                    <h3>Boards</h3>
                    <p>Task Pro boards help organize tasks and avoid interruptions in work. Instantly review tasks at all stages: from "there's still work to be done" to "hooray, we've done it."</p>
                </li>
                <li onClick={(e) => selectFeature(e)} className={`${css.controlCard} ${selected === 'lists' && css.active}`} id='lists'>
                    <h3>Lists</h3>
                    <p>Displays the stages of the task. You can start with basic "To Do", "Working", "Done" or organize the workflow according to the needs of the team. Work with Task Pro your own way.</p>
                </li>
                <li onClick={(e) => selectFeature(e)} className={`${css.controlCard} ${selected === 'cards' && css.active}`} id='cards'>
                    <h3>Cards</h3>
                    <p>Cards represent tasks and ideas, and also contain necessary work information. As you work, drag cards between different lists so everyone can see the status of the task.</p>
                </li>
            </ul>
            <img src={previews[selected]} alt="" className={css.featuresImg}/>
        </div>
    </section>
  )
}
