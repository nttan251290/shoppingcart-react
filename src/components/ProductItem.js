/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

import Helpers from './../libs/helpers'
import Validate from '../libs/Validate'
import * as configs from './../constants/Config';

class ProductItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: 1
		}
	}

	handleChange = (event) => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	handleClick = (product) => {
		let quantity = parseInt(this.state.value)
		if (!Validate.checkQuantity(quantity)) {
			this.props.onChangeNotify(configs.NOTI_GREATER_THAN_ONE)
		} else {
			this.props.onBuyProduct(product, quantity)
			this.props.onChangeNotify(configs.NOTI_ACT_ADD)
		}

	}

	render() {
		let { product } = this.props

		return (
			<div className="media product">
				<div className="media-left">
					<a href="{#}">
						<img
							className="media-object"
							src={`images/${product.image}`}
							alt="charmander"
						/>
					</a>
				</div>
				<div className="media-body">
					<h4 className="media-heading">{product.name}</h4>
					<p>
						{product.summary}
					</p>
					{this.showAreaBuy(product)}
				</div>
			</div>
		)
	}

	showAreaBuy(product) {
		let ele = null
		let price = Helpers.toCurrency(product.price, 'USD', 'right')

		if (product.canBuy) {
			ele = <p>
				<input name="value" value={this.state.value} onChange={this.handleChange} type="number" min={1} />
				<a onClick={() => this.handleClick(product)} type="button" href="#" className="price">{price}</a>
			</p>
		} else {
			ele = <span className="price"> {price} </span>
		}

		return ele
	}
}

export default ProductItem