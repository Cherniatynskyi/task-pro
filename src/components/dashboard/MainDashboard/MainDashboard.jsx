import css from './MainDashboard.module.css';
import sprite from '../../../images/sprite.svg';
import { Column } from 'components/Column/Column';
import { Card } from 'components/Card/Card';
import { useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { openModal } from '../../../redux/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import {getCards} from '../../../redux/card/cardThunk';
import {getColumns} from '../../../redux/column/columnThunk';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { updateColumnId } from '../../../redux/card/cardThunk';
import { useTranslation } from 'react-i18next';


const MainDashboard = ({ board }) => {
  const dispatch = useDispatch();
  const stateColumns = useSelector(state => state.columns.columns)
  const stateCards = useSelector(state => state.cards.cards)
  const filterValue = useSelector(state => state.filter.filterValue)
  const [listRef] = useAutoAnimate()
  const {t} = useTranslation()


  useEffect(() => {
    if(board){
      dispatch(getColumns(board._id))
      dispatch(getCards(board._id))
    }
  }, [dispatch, board]);


  const handleAddColumn = () => {
    dispatch(openModal({ content: 'add-column' }));
  };


  const handleDragEnd = (result) =>{
    const {draggableId, destination, source} = result

    if(!destination){
      return
    }
    
    if((destination.droppableId === source.droppableId) & (destination.index === source.index)){
      return
    }

    if((destination.droppableId === source.droppableId)){
      dispatch(updateColumnId({id: draggableId, columnId: destination.droppableId, index: destination.index}))
      const changedCard = stateCards.filter(c => c.columnId === source.droppableId).find(card => card.index === destination.index)
      dispatch(updateColumnId({id: changedCard._id, columnId: destination.droppableId, index: source.index}))
      return
    }


    dispatch(updateColumnId({id: draggableId, columnId: destination.droppableId, index: destination.index}))
    const srcCards = stateCards.filter(c => c.columnId === source.droppableId)
    const dstnCards = stateCards.filter(c => c.columnId === destination.droppableId)

    srcCards.forEach(c => {
      if((c.index < source.index) || (c._id === draggableId)){
        return
      }
      dispatch(updateColumnId({id: c._id, columnId: c.columnId, index: c.index - 1}))
    });

    dstnCards.forEach(c => {
      if((c.index < destination.index)){
        return
      }
      dispatch(updateColumnId({id: c._id, columnId: c.columnId, index: c.index + 1}))
    });

  }

  return (
      <div className={css.boardWrap}>
      <DragDropContext onDragEnd={handleDragEnd}>
      <ul className={css.columnsList} ref={listRef}>
        {stateColumns && stateColumns.map(col => {
          return (
            <Column key={col._id} column={col} >
            <Droppable droppableId={col._id}>
              {(provided, snapshot) => (
                  <ul className={css.columnList}
                   ref={provided.innerRef}
                    {...provided.droppableProps}
                    data-dragover={snapshot.isDraggingOver}
                    >
                  {stateCards && stateCards
                  .filter(card => {
                    if(card.columnId === col._id){
                      if(filterValue){
                        return (card.priority === filterValue)
                      }
                      return true
                    }
                    return false
                  }).sort(function(a,b){return a.index-b.index})
                  .map(card => {
                    return (<Card key={card._id} card={card}/>);
                  })}
                  {provided.placeholder}
                  </ul> 
              
              )}
              </Droppable>
            </Column>
          );
        })}
        <button onClick={handleAddColumn} className={css.addColumnBtn}>
          <div className={css.addColumnWrap}>
            <svg className={css.addColumnIcon}>
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
            <p className={css.addColumnTitle}>{t("main.add-column")}</p>
          </div>
        </button>
      </ul>
      </DragDropContext>
    </div>
    
  );
};

export default MainDashboard;
