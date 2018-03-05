import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreating } from './../reducers/anecdoteReducer'
import { notificating, notificationHiding } from './../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  createAnecdote = (e) => {
    e.preventDefault()
    const anec = e.target.anecdote.value
    if (anec !== '') {
      this.props.anecdoteCreating(anec)
      this.props.notificating("anecdote created: '"+anec+"'")
      setTimeout(() =>  {
        this.props.notificationHiding()
      }, 5000)
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
