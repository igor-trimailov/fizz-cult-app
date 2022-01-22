import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { getAudioManager } from '../utils'
import ExerciseList from './exercise/ExerciseList'
import { Jumbotron } from './common'
import { selectCurrentRoutineId, selectExercises } from '../selectors'
import { setCurrentRoutineId } from '../reducers/routines'
import { startExercise } from '../reducers/exercise'

function Exercises() {
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const params = useParams()
  const exercises = useSelector(selectExercises)

  const currentRoutineId = useSelector(selectCurrentRoutineId)

  const handleStartExercise = () => {
    // safari hack to provide audio for the rest of the app
    getAudioManager()

    const exercise = exercises[0]

    if (exercise) {
      dispatch(startExercise(exercise))
      history.push(
        process.env.PUBLIC_URL +
          `/routine/${currentRoutineId}/exercise/${exercise.id}`
      )
    }
  }

  useEffect(() => {
    const routineId = params?.routineId
    if (routineId) {
      dispatch(setCurrentRoutineId(routineId))
    }
  }, [dispatch, params])

  if (!exercises?.length) return <div>Routine does not exist</div>

  return (
    <div className="exercises">
      <Jumbotron
        heading={t('exercises.header.heading')}
        text={t('exercises.header.text')}
        image="logo.png"
      >
        <Button variant="secondary" onClick={handleStartExercise}>
          {t('exercises.header.button')}
        </Button>
      </Jumbotron>
      <ExerciseList {...{ exercises, routineId: currentRoutineId }} />
    </div>
  )
}

export default Exercises
