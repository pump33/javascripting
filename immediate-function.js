var counter = (function () {
	//�v���C�x�[�g�ɂ������v���p�e�B
	var count = 0;

	return {
		//���Z���\�b�h
		increment: function () {
			count += 1;
			console.log('count:' + count);
		}
	};
}());

counter.increment(); //1���o�͂����
counter.increment(); //2���o�͂����

console.log(counter.getcount); //��undefined
