import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import apiconfig from 'actions/apiConfig';
import toastr from 'toastr';
import {loadUser} from 'actions/loginAction'
const optionsTo = {
	"progressBar": true,
	"positionClass": "toast-bottom-right",
};

class ProfilePic extends Component {
  state = {
    selectedFile: null,
    errorFile: null,
    loading: false,
  }

  componentDidMount() {
		const userLog = JSON.parse(sessionStorage.userInfo);
		if (this.props.resume == null)
			this.props.loadUser(userLog.Id,userLog.token);
		else{
			if( this.props.resume.Id !== userLog.Id)
				this.props.loadUser(userLog.Id, userLog.token);
		}
  }
	_imageName = (existImage, id) => existImage ? `./profile/${id}_profile.jpg?${new Date().getTime()}` 
																							:	`./profile/no_profile.jpg?${new Date().getTime()}`

  _sendImage = (Id, tokenStr) => {
    const url = `${apiconfig.PREFIX}${apiconfig.PROFILE_PICTURE}`;
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    data.append('Id', Id)
    axios({
			method:'POST',
			data: data,
			url: url,
			headers: {"Authorization" : `Bearer ${tokenStr}`} ,
			timeout: apiconfig.REQUEST_TIMEOUT,
		}).then((result) =>{
      toastr.success("Se actualizo la foto con exito","Informacion", optionsTo);
      this.setState({loading: false})
      this.props.history.push('/resume');
    }).catch(error =>{
      toastr.error("Error al cambiar la foto, intenta de nuevo por favor.","Error", optionsTo);
      this.setState({loading: false})
    })
  }
  
  _handleUploadImage = () =>{
    if(this.state.selectedFile){
      this.setState({errorFile: null, loading: true})
      const userLog = JSON.parse(sessionStorage.userInfo);
      this._sendImage(userLog.Id,userLog.token)
    }else{
      this.setState({errorFile: 'Selecciona una imagen primero'})
    }
  }
  render() {
    return (
      <div id="profile-picture">
        <div className="row">
          <div className ="col-md-12 profile-content">
            { this.props.loading ?
              <div className="icon-wrapper">
                <i className="fa fa-spinner fa-spin custom-icon"></i>
              </div> :
              <div>
                <h3>Es tiempo de cambiar tu foto de perfil</h3>
                { this.props.resume &&
                  <img src={`${this._imageName(this.props.resume.existImage,this.props.resume.Id)}`} alt="profile" className="img-thumbnail"/>
                }
                <div className="">
                <div className="custom-file">
                  <label className="btn btn-dark">
                    <input type="file" accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => this.setState({selectedFile: e.target.files[0]})}/>
                  </label>
                </div>
                  <button type="button" className="btn btn-info" onClick={this._handleUploadImage}>
                    {this.state.loading ? <i className="fa fa-spinner fa-spin"></i> : "Subir foto"}
                  </button>
                </div>
                <div className="container log-validation">
                  {this.state.errorFile && <div className="alert alert-danger">{this.state.errorFile}</div>}
                </div>
              </div>
                }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	...state.loginInfo
});
const mapDispatchToProps = {
  loadUser,
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProfilePic))
