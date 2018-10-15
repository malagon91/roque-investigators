import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfilePic extends Component {
  render() {
    return (
      <div id="profile-picture">
        <div className="row">
          <div className ="col-md-12 profile-content">
            <h3>Es tiempo de cambiar tu foto de perfil</h3>
            <img src="./profile/no_profile.jpg" alt="profile" className="img-thumbnail"/>
						<div className="">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFileLang" lang="es"/>
              <label className="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
            </div>
							<button type="button" className="btn btn-info" >Cambiar</button>
						</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePic
