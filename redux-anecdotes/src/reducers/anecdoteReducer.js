
const getId = () => (100000*Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote.content,
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) => {

  switch (action.type) {
    case "VOTE":
      const id = action.id
      const anecToVote = state.find(n => n.id === id)
      const changedAnec = {...anecToVote, votes: anecToVote.votes + 1}
      return state.map(anec => anec.id !== id ? anec : changedAnec )
    case 'INIT_ANECDOTES':
      return action.data
    case "ADD":
      return [...state, asObject(action.anecdote)]
    default:
      return state
  }
}

export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export const anecdoteCreating = (data) => {
  return {
    type: 'ADD',
    anecdote: data
  }
}

export const voteAdding = (id) => {
  return {
    type: 'VOTE',
    id
  }
}

export default anecdoteReducer
