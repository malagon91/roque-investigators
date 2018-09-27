import React, { Component } from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from './routes'
import './../css/main.scss'
 
class App extends Component{
render(){
	return (
		<div>
			<Header/>
				<Main/>
			<Footer/>
		</div>
	);
}
}

export default App;