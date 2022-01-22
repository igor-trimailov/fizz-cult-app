import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const userLogin = createAsyncThunk('user/userLogin', async (data) => {
  const url = '/users/authenticate/'
  const options = {
    method: 'POST',
    body: new URLSearchParams(data),
  }
  const response = await fetch(process.env.PUBLIC_URL + url, options)
    .then((res) => res.json())
    .then((data) => {
      return data
    })
  return response
})

const initialState = {}
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userLogout() {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
  },
})

export const { userLogout } = userSlice.actions

export default userSlice.reducer
