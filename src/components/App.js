import React, { Component } from 'react'
import Title from './Title'
import Cart from './Cart'

import ProductList from './ProductList'

class App extends Component {
	render() {
		return (
			<div className="container">
				<Title />
				<div className="row">
					<ProductList />
					<Cart />
				</div>
			</div>
		);
	}
}

export default App;
