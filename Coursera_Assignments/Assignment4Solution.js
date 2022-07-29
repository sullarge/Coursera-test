
// ASSIGNMENT MODULE 4

(function (){

	var theArray = ["Yakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (Names in theArray){
	if (theArray[Names][0] == "j" || theArray[Names][0] == "J"){
		console.log(`Good Bye ${theArray[Names]}`)
	}
	else {
		console.log(`Hello ${theArray[Names]}`)
	}
	
}

}());
