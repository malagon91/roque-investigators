import {
	CHANGE_NAME, CHANGE_TITLE, CHANGE_INST,
	CHANGE_DEPTO, CHANGE_ADDRESS, CHANGE_URL,
	CHANGE_EMAIL, CHANGE_PHONE, CHANGE_INFO
  } from 'actions/actionsTypes'

  export function changeName(name){
	  return {
		  type: CHANGE_NAME,
		  payload: name,
	  }
  }

  export function changeTitle(title){
	return {
		type: CHANGE_TITLE,
		payload: title,
	}
}

export function changeInst(inst){
	return {
		type: CHANGE_INST,
		payload: inst,
	}
}

export function changeDepto(depto){
	return {
		type: CHANGE_DEPTO,
		payload: depto,
	}
}

export function changeAddress(address){
	return {
		type: CHANGE_ADDRESS,
		payload: address,
	}
}

export function changeUrl(url){
	return {
		type: CHANGE_URL,
		payload: url,
	}
}

export function changeEmail(email){
	return {
		type: CHANGE_EMAIL,
		payload: email,
	}
}

export function changePhone(phone){
	return {
		type: CHANGE_PHONE,
		payload: phone,
	}
}

export function changeInfo(info){
	return {
		type: CHANGE_INFO,
		payload: info,
	}
}

export function updateResume(resume){
	//TODO: add function to update the info in db API
}