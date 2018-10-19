import React, { Component } from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from './routes'
import './../css/main.scss'
import './../../node_modules/toastr/build/toastr.min.css';


class App extends Component{
render(){
	return (
		<div>
			<Header/>
				<div className="body-content">
					<Main/>
				</div>
			<Footer/>
		</div>
	);
}
}

export default App;