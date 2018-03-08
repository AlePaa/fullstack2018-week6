import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreating } from './../reducers/anecdoteReducer'
import { notify } from './../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {

  createAnecdote = async (e) => {
    e.preventDefault()
    const anec = e.target.anecdote.value
    e.target.anecdote.value = ''
    this.props.anecdoteCreating(anec)
    this.props.notify("anecdote created: '"+anec+"'", 5000)

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

const mapDispatchToProps = {
  anecdoteCreating,
  notify
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
