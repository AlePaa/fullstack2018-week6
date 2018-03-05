import React from 'react'
import { connect } from 'react-redux'
import { voteAdding } from './../reducers/anecdoteReducer'
import { notificating, notificationHiding } from './../reducers/notificationReducer'

import Filter from './Filter'

class AnecdoteList extends React.Component {

  addVote = (id, content) => () => {
    this.props.voteAdding(id)
    this.props.notificating("you voted '"+ content +"'")
    setTimeout(() => this.props.notificationHiding(), 5000)
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {this.props.anecdotesToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.addVote(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const filteredAnecdotes = (anecdotes, filter) => {
  return anecdotes
    .filter((anec) => anec.content.includes(filter))
    .sort( (a,b) => a.votes < b.votes )
}
const mapStateToProps = (state) => {
  return {
    anecdotesToShow: filteredAnecdotes(state.anecdotes, state.filter)
  }
}

const mapDispatchToProps = {
  voteAdding,
  notificating,
  notificationHiding
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
