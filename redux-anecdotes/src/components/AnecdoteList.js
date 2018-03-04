import React from 'react'
import PropTypes from 'prop-types'
import actionFor from '../actionCreators'

class AnecdoteList extends React.Component {

  addVote = (id) => () => {
    this.context.store.dispatch(
      actionFor.voteAdding(id)
    )
  }

  render() {
    const anecdotes = this.context.store.getState().anecdotes.sort( (a,b) => a.votes < b.votes )
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.addVote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}


export default AnecdoteList
