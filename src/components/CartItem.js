import React, { Component } from 'react'

class CartItem extends Component {
	render() {
		return (
			<tr>
				<th scope="row">1</th>
				<td>Lorem ipsum.</td>
				<td>12 USD</td>
				<td>
					<input
						name="cart-item-quantity-1"
						type="number"
						defaultValue={1}
						min={1}
					/>
				</td>
				<td>
					<strong>12 USD</strong>
				</td>
				<td>
					<a
						className="label label-info update-cart-item"
						href="{#}"
						data-product
					>
						Update
              </a>
					<a
						className="label label-danger delete-cart-item"
						href="{#}"
						data-product
					>
						Delete
              </a>
				</td>
			</tr>
		)
	}
}

export default CartItem