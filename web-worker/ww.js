onmessage = function(e) {
	postMessage("You talkin to me? " + e.data.val);
}

const fibonacci = n => {
	if (n === 1 || n === 2) {
		return 1
	}
	if (n > 2) {
		return fibonacci(n - 1) + fibonacci(n - 2)
	}
}
console.time('计算时间')
fibonacci(10)
console.timeEnd('计算时间')