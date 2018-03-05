
const initialState = "render notification here..."

const notificationReducer = (state = initialState, action) => {

  switch (action.type) {
    case "NOTIFY":
      state = action.notification
      return state
    case "HIDE_NOTIFICATION":
      state = initialState
      return state
    default:
      return state
  }
}

export const notificating = (notification) => {
  return {
    type: "NOTIFY",
    notification
  }
}

export const notificationHiding = () => {
  return {
    type: "HIDE_NOTIFICATION"
  }
}
export default notificationReducer
