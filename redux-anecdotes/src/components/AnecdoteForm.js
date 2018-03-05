import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreating } from './../reducers/anecdoteReducer'
import { notificating, notificationHiding } from './../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {

  createAnecdote = async (e) => {
    e.preventDefault()
      const anec = e.target.anecdote.value
      e.target.anecdote.value = ''
      const newAnecdote = await anecdoteService.createNew(anec)
      this.props.anecdoteCreating(newAnecdote)
      this.props.notificating("anecdote created: '"+anec+"'")
      setTimeout(() =>  {
        this.props.notificationHiding()
      }, 5000)
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
  notificating,
  notificationHiding
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
