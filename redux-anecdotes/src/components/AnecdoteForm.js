import React from 'react'
import PropTypes from 'prop-types'
import actionFor from '../actionCreators'

class AnecdoteForm extends React.Component {

  createAnecdote = (e) => {
    e.preventDefault()
    const anec = e.target.anecdote.value
    if (anec !== '') {
      this.context.store.dispatch(
        actionFor.anecdoteCreating(anec)
      )
      e.target.anecdote.value = ''
    }
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.createAnecdote}>
          <div><input name="anecdote" /></div>
          <button type="submit">create</button>
        </form>
      </div>
    )
  }
}

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteForm
