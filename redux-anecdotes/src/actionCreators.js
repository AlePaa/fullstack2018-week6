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
  }
}

export default actionFor
