import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useTranslation } from 'react-i18next'

import Routine from './routine/Routine'
import { Authenticated, Jumbotron } from './common'

import { handleDragEnd } from '../utils'
import { selectRoutines } from '../selectors'
import { fetchRoutines, orderRoutines } from '../reducers/routines'

function Routines() {
  const history = useHistory()
  const dispatch = useDispatch()
  const routines = useSelector(selectRoutines)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchRoutines())
  }, [dispatch])

  const setRoutinesCallback = (routines) => {
    dispatch(orderRoutines(routines))
  }

  const onRoutineClick = (routineId) => {
    history.push(process.env.PUBLIC_URL + '/routine/' + routineId)
  }

  const onDragEnd = (result) => {
    handleDragEnd(result, routines, setRoutinesCallback)
  }

  return (
    <div className="routines">
      <Jumbotron
        heading={t('routines.header.heading')}
        text={t('routines.header.text')}
        image="logo.png"
      >
        <Authenticated>
          <button>Add a new routine</button>
        </Authenticated>
      </Jumbotron>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div
              className="routines-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {routines.map((routine, index) => (
                <Routine
                  routine={routine}
                  index={index}
                  key={routine.id}
                  selectRoutine={onRoutineClick}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Routines
