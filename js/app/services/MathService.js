function MathService() {
  this.sum = function(arr) {
    var total = arr.reduce(function(a, b) {
      return a + b; 
    }, 0);
    return total;
  }
}

angular
  .module('app')
  .service('MathService', MathService);
	
