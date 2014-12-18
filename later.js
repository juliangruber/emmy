/**
 * @module  emmy/later
 */

module.exports = later;


var on = require('./on');
var isFn = require('mutype/is-fn');


/**
 * Postpone callback call for N ms
 *
 * @return {Function} Wrapped handler
 */
function later(target, evt, fn, interval) {
	return on(target, evt, later.wrap(target, evt, fn, interval));
}


/** Return wrapped callback */
later.wrap = function(target, evt, fn, interval){
	//swap params, if needed
	if (isFn(interval)) {
		var tmp = selector;
		selector = fn;
		fn = tmp;
	}

	var cb = function(){
		var args = arguments;
		var self = this;

		setTimeout(function(){
			fn.apply(self, args);
		}, interval);
	};

	cb.fn = fn;

	return cb;
};