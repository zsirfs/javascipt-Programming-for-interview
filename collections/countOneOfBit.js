//计算二进制中1的个数
function countOneOfBit(num) {
	return num.toString(2).split("").filter(function(value) {
		return +value;
	}).length;
}

function countOneOfBit1(num) {
	var count = 0;
	while(num > 0) {
		if(num & 1) {
			count++;
		}
		num = num >> 1;
	}
	return count;
}

const countOneOfBit2 = function countOneOfBit2(num){
    let count = 0;
    for (count =0; num; ++count){
        num &= (num -1) ; // 清除最低位的1
    }
    return count ;
}

console.log(countOneOfBit(3));
