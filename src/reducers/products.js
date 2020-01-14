import * as types from './../constants/ActionType';

let defaultState = [
	{
		id: 'aplusautomation123',
		name: 'aplus automation',
		image: 'aplusautomation.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 12,
		canBuy: true
	},
	{
		id: 'aplusmedia123',
		name: 'aplus media',
		image: 'aplus-media.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 22,
		canBuy: true
	},
	{
		id: 'robofigcombo123',
		name: 'robo fig combo',
		image: 'robo_fig_combo.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 5,
		canBuy: true
	},
	{
		id: 'target-leap-frog',
		name: 'target leap frog',
		image: 'target-leap-frog.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 8,
		canBuy: false
	},
	{
		id: 'target-leap-frog',
		name: 'target leap frog',
		image: 'target-leap-frog.jpg',
		summary: 'AAA Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 8,
		canBuy: false
	}
];


const products = (state = defaultState, action) => {

	switch (action.type) {
		case types.LIST_PRODUCT:
			return state;
		default:
			return state;
	}
}

export default products;