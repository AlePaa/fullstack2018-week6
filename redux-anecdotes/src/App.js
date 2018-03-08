import React from 'react';
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { connect } from 'react-redux'
import { initializeAnecdotes} from './reducers/anecdoteReducer'

class App extends React.Component {

  componentDidMount = async () => {
    this.props.initializeAnecdotes()
  }

  render() {
    return (
      <div>
        <h1>Programming notifications</h1>
        <Notification />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

export default connect(
  null, { initializeAnecdotes }
)(App)
