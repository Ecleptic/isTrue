const is = require('is-thirteen')

export const is = function(x) {
	let something
	let obj = {
		roughly() {
			console.log('probably')
			something = x
			return this
		},
		isTrue() {
			something = x
			return something
		},
		isThirteen() {
			something = is(x).thirteen()
		}
	}

	return obj
}
