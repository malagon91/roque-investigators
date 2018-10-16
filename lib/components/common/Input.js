import React, { Component } from 'react'


const InputText = props => (
	props.isEnable ? (
		<div className="form-group row">
			<label htmlFor={props.name} className="col-sm-2 col-form-label">{props.text}</label>
			<div className="col-sm-10">
				<input type="text" className="form-control" id={props.name} placeholder={props.text}
						value={props.value} onChange={(e) =>{ props.onChangefn(e.target.value)}} />
			</div>
		</div> ) : (
		<div className="form-group row">
			<label htmlFor={props.name} className="col-sm-2 col-form-label">{props.text}</label>
			<div className="col-sm-10">
				<input type="text" className="form-control" id={props.name} placeholder={props.text}
						value={props.value} readOnly />
			</div>
		</div>
	)
);

export default InputText;