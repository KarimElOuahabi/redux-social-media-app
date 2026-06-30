import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(name, email) {
        return {
          payload: {
            id: nanoid(),
            name,
            email,
          },
        }
      },
    },
    userUpdated(state, action) {
      const { id, name, email } = action.payload
      const existingUser = state.find((user) => user.id === id)
      if (existingUser) {
        existingUser.name = name
        existingUser.email = email
      }
    },
  },
})

export const { userAdded, userUpdated } = usersSlice.actions

export default usersSlice.reducer
