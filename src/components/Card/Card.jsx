import css from './Card.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/card/cardThunk';
import { priorityEnum } from 'utils/priorityObject';
import { openModal } from '../../redux/modalSlice';
import { ChangeColumnMenu } from './ChangeColumn/ChangeColumnMenu';


export const Card = ({card}) =>{
    const dispatch = useDispatch()
    const priorityColor = priorityEnum.find(pr => pr.title === card.priority)
    const handleDeleteCard = (e) =>{
        dispatch(deleteCard(card._id))
    }

    const handleEditCard = () =>{
        dispatch(openModal({content: "edit-card", id: `${card._id}`}))
    }
    //Логіка: Дані передаються в компонент з отриманого з бекенду юзера в тому числі додаткові класи; дзвіночок створюється за умови якщо сьогоднішня дата на 1 більша за дату дедлайну; додати функції при кліку на іконки 
    return (
        <div className={css.cardHeight}>
            <div style={{backgroundColor: `${priorityColor.color}`}} className={css.cardWrapper}>
                <div className= {css.cardContainer}>
                    <h4 className={css.cardTitle}>{card.title}</h4>
                    <p className={css.cardDiscription}>{card.description}</p>
                    <div className={css.cardFooterWrapper}>
                        <div className={css.cardFooter}>
                            <div className={css.cardPriority}>
                                <h5 className={css.cardFooterTitle}>Priority {card.index}</h5>
                                <div className={css.cardPriorityInfo}>
                                    <div style={{backgroundColor: `${priorityColor.color}`}} className={`${css.cardPriorityCircle}`}></div>
                                    <p className={css.cardPriorityName}>{card.priority.split(' ')[0]}</p>
                                </div>
                            </div>
                            <div className={css.cardDeadline}>
                                <h5 className={css.cardFooterTitle}>Deadline</h5>
                                <p className={css.cardDeadlineDate}>{card.deadline.split("T")[0]}</p>
                            </div>
                            <ul className={css.cardIconsList}>
                                <li className={css.cardIconItem}>
                                    <button type='button' className={css.cardIconButton}>
                                    <svg className={css.cardSvg}>
                                        <use href={`${sprite}#icon-bell`}/>
                                    </svg>
                                    </button>
                                </li>
                                <li className={css.cardIconItem} >
                                    <ChangeColumnMenu card={card}/>
                                </li>
                                <li className={css.cardIconItem}>
                                    <button onClick={e=>handleEditCard(e)} type='button' className={css.cardIconButton}>
                                    <svg className={css.cardSvg}>
                                        <use href={`${sprite}#icon-pencil`}/>
                                    </svg>
                                    </button>
                                </li>
                                <li className={css.cardIconItem}>
                                    <button onClick={handleDeleteCard} type='button' className={css.cardIconButton}>
                                    <svg className={css.cardSvg}>
                                        <use href={`${sprite}#icon-trash`}/>
                                    </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
    </div>
)}