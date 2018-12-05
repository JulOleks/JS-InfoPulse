
function recursion(n){
if (n === 0) {
	return 0;
} else { 
	return n + recursion(n-1);

}
}
console.log(recursion(100));
