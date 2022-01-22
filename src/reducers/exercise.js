import { createSlice } from '@reduxjs/toolkit'

const initialState = { previous: null, current: null }

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: initialState,
  reducers: {
    startExercise(state, action) {
      return state.current === null
        ? { ...state, current: action.payload }
        : { previous: state.current, current: action.payload }
    },
    stopExercise() {
      return initialState
    },
  },
})

export const { startExercise, stopExercise } = exerciseSlice.actions

export default exerciseSlice.reducer
