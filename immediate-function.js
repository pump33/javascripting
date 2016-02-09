var counter = (function () {
	//プライベートにしたいプロパティ
	var count = 0;

	return {
		//加算メソッド
		increment: function () {
			count += 1;
			console.log('count:' + count);
		}
	};
}());

counter.increment(); //1が出力される
counter.increment(); //2が出力される

console.log(counter.getcount); //※undefined
