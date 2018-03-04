
const initialState = "render notification here..."

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ',state)
  console.log('action', action)

  switch (action.type) {
    case "CHANGE":
      return state
    default:
      return state
  }
}

export default notificationReducer
