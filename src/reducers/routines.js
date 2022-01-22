import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { omit } from 'lodash'

export const fetchRoutines = createAsyncThunk(
  'routines/fetchRoutines',
  async () => {
    const response = await fetch(process.env.PUBLIC_URL + '/data.json')
      .then((res) => res.json())
      .then((data) => {
        return data
      })
    return response
  }
)

const initialState = {
  status: 'idle',
  routines: [],
  currentRoutineId: null
}

const routinesSlice = createSlice({
  name: 'routines',
  initialState: initialState,
  reducers: {
    orderRoutines(state, action) {
      if (state.routines?.length === action.payload.length) {
        state.routines = action.payload
      }
    },
    setCurrentRoutineId(state, action) {
      state.currentRoutineId = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoutines.pending, (state) => {
        console.warn('loading')
        state.status = 'loading'
      })
      .addCase(fetchRoutines.fulfilled, (state, action) => {
        const routines = (action.payload.routines || []).map((routine) =>
          omit(routine, 'exercises')
        )
        console.warn('loaded', routines)
        state.status = 'idle'
        state.routines = routines
      })
  },
})

export const { orderRoutines, setCurrentRoutineId } = routinesSlice.actions

export default routinesSlice.reducer
