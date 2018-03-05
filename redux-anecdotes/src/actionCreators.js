const actionFor = {
  voteAdding(id) {
    return {
      type: 'VOTE',
      id
    }
  },
  anecdoteCreating(data) {
    return {
      type: 'ADD',
      anecdote: data
    }
  },
  notificating(notification) {
    return {
      type: 'NOTIFY',
      notification
    }
  },
  notificationHiding() {
    return {
      type: 'HIDE_NOTIFICATION'
    }
  },
  filtering(filter) {
    return {
      type: 'SET_FILTER',
      filter
    }
  }
}

export default actionFor
