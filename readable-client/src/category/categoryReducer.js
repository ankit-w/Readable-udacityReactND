import * as Types from './Constants'

function categories(state=[], action) {
  switch(action.type) {
    case Types.FETCH_CATEGORY:
      return action.res.categories
    default:
      return state
  }
}

export default categories
