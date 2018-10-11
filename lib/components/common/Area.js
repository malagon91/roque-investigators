import React, { Component } from 'react'


const TextArea = props => (
	<div className="form-group row">
		<label htmlFor={props.name} className="col-sm-2 col-form-label">{props.text}</label>
		<div className="col-sm-10">
			<textarea type="text" className="form-control" id={props.name} placeholder={props.text}  rows="4"
				value={props.value} onChange={(e) =>{ this.props.changefn(e.target.value)}}/>
		</div>
	</div>
);

export default TextArea;