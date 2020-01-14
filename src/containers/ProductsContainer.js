import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as config from './../constants/Config';
import ProductList from '../components/ProductList'
import ProductItem from '../components/ProductItem'

class ProductsContainer extends Component {
  render() {
    let { products } = this.props
    return (
      <ProductList>
        {this.showListProduct(products)}
      </ProductList>
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
  
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    canBuy: PropTypes.bool.isRequired,
  })).isRequired
}

const mapStateToProps = state => {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps, null)(ProductsContainer)
