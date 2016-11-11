angular.module('shared', [])

/*
* Evaluate input
* return checkmark if checkmark is true
* 			 cross otherwise
*/
.filter('checkmark', function() {
	return function(input) {
		return input ? '\u2713' : '\u2718';
	}
});