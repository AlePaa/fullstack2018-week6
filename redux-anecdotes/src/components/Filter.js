import React from 'react'
import { connect } from 'react-redux'

import { filtering } from './../reducers/filterReducer'

class Filter extends React.Component {

  handleChange = (event) => {
    this.props.filtering(event.target.value)
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  filtering
}

const ConnectedFilter = connect(
  null,
  mapDispatchToProps
)(Filter)
export default ConnectedFilter
