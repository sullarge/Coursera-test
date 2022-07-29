
// ASSIGNMENT MODULE 4

(function (){

	var theArray = ["Yakov", "John", "Olawale", "Jen", "Jason", "Paul", "Frank", "Larry", "Joseph", "Sulaimon", "Adewale", "joy", "Yusuff", "jolayemi"];
	console.log(theArray)

for (Names in theArray){
	if (theArray[Names][0] == "j" || theArray[Names][0] == "J"){
		console.log(`Good Bye ${theArray[Names]}`)
	}
	else {
		console.log(`Hello ${theArray[Names]}`)
	}
	
}

}());
