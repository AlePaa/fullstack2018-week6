
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

export const notify = (notification, timeout) => {
  return async (dispatch) => {
    dispatch({
      type: "NOTIFY",
      notification
    })
    setTimeout(() =>  {
      dispatch({
        type: "HIDE_NOTIFICATION"
      })
    }, timeout)
  }
}
export default notificationReducer
