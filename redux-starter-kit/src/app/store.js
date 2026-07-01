import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import reducer from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  },
})
