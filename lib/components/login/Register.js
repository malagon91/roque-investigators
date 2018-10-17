import React, { Component } from 'react'
import PropTypes from 'prop-types'
import connect from 'react-redux'

class Register extends Component {
  render(){
    return (
      <div id="register-user">
      <h2>asdads</h2>
      </div>
    )
  }
}

mapStateToProps = (state) => ({
  ...state
})
mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(Register)