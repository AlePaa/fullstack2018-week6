
const initialState = ""

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case "SET_FILTER":
      return action.filter
    default:
      return state
  }
}

export const filtering = (filter) => {
  return {
    type: "SET_FILTER",
    filter
  }
}

export default notificationReducer
