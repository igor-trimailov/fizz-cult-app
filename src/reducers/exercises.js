import { createSlice } from '@reduxjs/toolkit'
import { fetchRoutines } from './routines'

const initialState = {}

const exercisesSlice = createSlice({
  name: 'routines',
  initialState: initialState,
  reducers: {
    orderExercises(state, action) {
      const { routineId, exercises } = action.payload

      return {
        ...state,
        [routineId]:
          state[routineId].length === exercises.length ? exercises : state,
      }
    },
    setExerciseDuration(state, action) {
      const { routineId, exerciseId, duration } = action.payload

      return {
        ...state,
        [routineId]: state[routineId].map((exercise) =>
          exercise.id === exerciseId ? { ...exercise, duration } : exercise
        ),
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoutines.fulfilled, (_state, action) => {
      return action.payload.routines.reduce((acc, routine) => {
        return {
          ...acc,
          [routine.id]: routine.exercises,
        }
      }, {})
    })
  },
})

export const { orderExercises, setExerciseDuration } = exercisesSlice.actions

export default exercisesSlice.reducer
