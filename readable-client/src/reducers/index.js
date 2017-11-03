import { combineReducers } from 'redux'

import posts from '../post/postReducer'
import categories from '../category/categoryReducer'
import comments from '../comment/commentReducer'

export default combineReducers({
  posts,
  categories,
  comments
})