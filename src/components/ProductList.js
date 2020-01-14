import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductItem from './ProductItem'
import * as config from './../constants/Config';

class ProductList extends Component {
	render() {
		let { products } = this.props

		return (
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title">List Products</h1>
					</div>
					<div className="panel-body" id="list-product">
						{/* PRODUCT : START */}
						{this.showListProduct(products)}
						{/* PRODUCT : END */}
					</div>
				</div>
			</div>
		)
	}

	showListProduct(products) {
		let xhtml = <b>{config.NOTI_EMPTY_PRODUCT}</b>

		if (products.length > 0) {
			xhtml = products.map((product, index) => {
				return (
					<ProductItem product={product} key={index} index={index} />
				)
			})
		}

		return xhtml
	}
}

const mapStateToProps = state => {
	return {
		products: state.products
	}
}
export default connect(mapStateToProps, null)(ProductList)