import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Alert, ListGroup, ListGroupItem, Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col } from 'react-bootstrap'

const notifierStyle = {
  color: 'green',
  border: '1px solid',
  fontSize: 16
}

const menuStyle = {
  backgroundColor: 'Cornsilk'
}

const Menu = ({anecdotes, anecdoteById, addNew, content}) => (
  <div>
    <Router>
      <div>
        <div>
          <Link to='/'>anecdotes</Link>&nbsp;
          <Link to='/create'>create new</Link>&nbsp;
          <Link to='/about'>about</Link>&nbsp;
        </div>
        <Notifier content={content} />
        <Route exact path="/" render={() =>
          <AnecdoteList anecdotes={anecdotes} />
        } />
        <Route exact path="/create" render={({history}) =>
          <CreateNew addNew={addNew} history={history} />}
        />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/anecdotes/:id" render={({match}) =>
          <Anecdote anecdote={anecdoteById(match.params.id)} />}
         />
      </div>
    </Router>
  </div>
)

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ListGroup>
      {anecdotes.map(anecdote =>
        <ListGroupItem key={anecdote.id} >
          <Link to={'/anecdotes/' + anecdote.id} >
            {anecdote.content}
          </Link>
        </ListGroupItem>)}
    </ListGroup>
  </div>
)

const Anecdote = ({ anecdote }) => (
  <div>
    <h2>{anecdote.content} by {anecdote.author}</h2>
    <p>has {anecdote.votes} votes</p>
    <p>for more info see <a href={anecdote.info}>{anecdote.info}</a></p>
  </div>
)

const About = () => (
  <Grid>
    <Row>
      <h2>About anecdote app</h2>
      <p>According to Wikipedia:</p>
    </Row>
    <Row>
        <Col xs={8} md={4}>
        <em>An anecdote is a brief, revealing account of an individual person or an incident.
          Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
          such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
          An anecdote is "a story with a point."</em>
        <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
        </Col>
        <Col xs={4} md={4}>
          <img alt="" width="280" height="280" src='https://upload.wikimedia.org/wikipedia/commons/d/df/Horse_and_Man.jpg' />
        </Col>
    </Row>
  </Grid>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.

    See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for the source code.
  </div>
)

const Notifier = ({content}) => (
  (content) ?
  <Alert color="success">
    <div>
      <p>a new statement {content} created!</p>
    </div>
  </Alert> : <div></div>
)

class CreateNew extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      author: '',
      info: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    })
    this.props.history.push('/')
  }

  render() {
    return(
      <div className='container'>
        <h2>create a new anecdote</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <div>
              <ControlLabel>content</ControlLabel>
              <FormControl
                name='content'
                value={this.state.content}
                onChange={this.handleChange} />
            </div>
            <div>
              <ControlLabel>author</ControlLabel>
              <FormControl name='author' value={this.state.author} onChange={this.handleChange} />
            </div>
            <div>
              <ControlLabel>url for more info</ControlLabel>
              <FormControl name='info' value={this.state.info} onChange={this.handleChange} />
            </div>
            <Button bsStyle="success" type="submit">create</Button>
          </FormGroup>
        </form>
      </div>
    )

  }
}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: ''
    }
  }

  addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    this.setState({ anecdotes: this.state.anecdotes.concat(anecdote),
      content: anecdote.content })
    setTimeout(() => this.setState({content: ''}), 10000)
  }

  anecdoteById = (id) => this.state.anecdotes.find(a => a.id === id)

  vote = (id) => {
    const anecdote = this.anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

    this.setState({ anecdotes })
  }

  render() {
    return (
      <div>
        <h1>Software anecdotes</h1>
        <Menu
          anecdotes={this.state.anecdotes}
          anecdoteById={this.anecdoteById}
          addNew={this.addNew}
          content={this.state.content}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
