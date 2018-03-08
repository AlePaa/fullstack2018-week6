
import anecdoteService from './../services/anecdotes'

const asObject = (anecdote) => {
  return {
    content: anecdote.content,
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) => {

  switch (action.type) {
    case "VOTE":
      const anecdote = action.anecdote
      return state.map(anec => anec.id !== anecdote.id ? anec : anecdote )
    case 'INIT_ANECDOTES':
      return action.data
    case "ADD":
      return [...state, asObject(action.anecdote)]
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const anecdoteCreating = (data) => {
    return async (dispatch) => {
      const newAnecdote = await anecdoteService.createNew(data)
      dispatch({
      type: 'ADD',
      anecdote: newAnecdote
    })
  }
}

export const voteAdding = (id) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteService.addVote(id)
    dispatch({
      type: 'VOTE',
      anecdote: votedAnecdote
    })
  }
}

export default anecdoteReducer
