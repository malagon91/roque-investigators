import React, { Component } from 'react'


export const InputText = props => (
	props.isEnable ? (
		<div className="form-group row">
			<label htmlFor={props.name} className="col-sm-3 col-form-label">{props.text}</label>
			<div className="col-sm-9">
				<input type="text" className="form-control" id={props.name} placeholder={props.text}
						value={props.value} onChange={(e) =>{ props.onChangefn(e.target.value)}} />
			</div>
		</div> ) : (
		<div className="form-group row">
			<label htmlFor={props.name} className="col-sm-3 col-form-label">{props.text}</label>
			<div className="col-sm-9">
				<input type="text" className="form-control" id={props.name} placeholder={props.text}
						value={props.value} readOnly />
			</div>
		</div>
	)
);

export const InputEmail = props => (
	props.isEnable ? (
		<div className="form-group row">
			<label htmlFor={props.name} className="col-sm-3 col-form-label">{props.text}</label>
			<div className="col-sm-9">
				<input type="email" className="form-control" id={props.name} placeholder={props.text}
						value={props.value} onChange={(e) =>{ props.onChangefn(e.target.value)}} />
			</div>
		</div> ) : (
		<div className="form-group row">
			<label htmlFor={props.name} className="col-sm-3 col-form-label">{props.text}</label>
			<div className="col-sm-9">
				<input type="email" className="form-control" id={props.name} placeholder={props.text}
						value={props.value} readOnly />
			</div>
		</div>
	)
);


export const TextArea = props => (
	<div className="form-group row">
		<label htmlFor={props.name} className="col-sm-3 col-form-label">{props.text}</label>
		<div className="col-sm-9">
			<textarea type="text" className="form-control" id={props.name} placeholder={props.text}  rows="4"
				value={props.value} onChange={(e) =>{ props.onChangefn(e.target.value)}}/>
		</div>
	</div>
);


export const InputCheck = props => (
	props.isEnable ? (
		<div className="form-check isadmin">
				<input type="checkbox" className="form-check-input" id={props.name} 
					value={props.value} onChange={(e) =>{ props.onChangefn(e.target.checked)}}/>
				<label className="form-check-label" htmlFor={props.name}>{props.text}</label>
			</div>
		) : (
		<div className="form-check isadmin">
    	<input type="checkbox" className="form-check-input" id={props.name}
				value={props.value} readOnly/>
    	<label className="form-check-label" htmlFor={props.name}>{props.text}</label>
  	</div>
		
	)
);

export const SearchText = props => (
	<div className="input-group mb-3 input-search">
		<div className="input-group-prepend">
			<span className="input-group-text fa fa-search form-control-feedback" id="basic-addon1"></span>
		</div>
		<input type="text" className="form-control custom-input" 
		placeholder={props.text} aria-label="searchText" aria-describedby="basic-addon1" 
		onChange={(e) =>{ props.onChangefn(e.target.value)}} />
	</div>
)