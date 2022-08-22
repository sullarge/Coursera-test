function	formmming (){
	document.querySelector("#forming").reset()
}
function check (form) {
		let margin = Number(form.Margin.value);
		let entry = Number(form.Entry.value);
		let target = Number(form.Target.value);
		let pipse = (target - entry);
		let profitPercentage = ((pipse * 100) / entry);
		let pnl = ((profitPercentage / 100) * margin);
		let newMargin = (pnl + margin);


		if (margin !== margin) {
	 			document.querySelector(".capital").innerHTML = "Input Error!";
	 		}
	 	else if (entry !== entry) {
	 			document.querySelector(".mainEntry").innerHTML = "Input Error!";
			}
	 	else if(target !== target) {
	 			document.querySelector(".mainTarget").innerHTML = "Input Error!";
	 		}
		else if (profitPercentage > 0){
			document.querySelector(".pecentpnl").style.backgroundColor = "lime";
			document.querySelector(".pnl").style.backgroundColor = "lime";
			document.querySelector(".newCapital").style.backgroundColor = "lime";

				document.querySelector(".capital").innerHTML = "$" + margin;
				document.querySelector(".mainEntry").innerHTML = entry;
				document.querySelector(".mainTarget").innerHTML = target;
				document.querySelector(".pecentpnl").innerHTML = profitPercentage.toFixed(2) + "%";
				document.querySelector(".pnl").innerHTML = "$" + pnl.toFixed(2);
				document.querySelector(".newCapital").innerHTML = "$" + newMargin.toFixed(2);
		}
	 	else if (profitPercentage < 0) {
	 		document.querySelector(".pecentpnl").style.backgroundColor = "red";
			document.querySelector(".pnl").style.backgroundColor = "red";
			document.querySelector(".newCapital").style.backgroundColor = "red";

				document.querySelector(".capital").innerHTML = "$" + margin;
				document.querySelector(".mainEntry").innerHTML = entry;
				document.querySelector(".mainTarget").innerHTML = target;
				document.querySelector(".pecentpnl").innerHTML = profitPercentage.toFixed(2) + "%";
				document.querySelector(".pnl").innerHTML = "$" + pnl.toFixed(2);
				document.querySelector(".newCapital").innerHTML = "$" + newMargin.toFixed(2);
	 	}
	 	else if (profitPercentage === 0) {
	 		document.querySelector(".pecentpnl").style.backgroundColor = "gray";
			document.querySelector(".pnl").style.backgroundColor = "gray";
			document.querySelector(".newCapital").style.backgroundColor = "gray";

				document.querySelector(".capital").innerHTML = "$" + margin;
				document.querySelector(".mainEntry").innerHTML = entry;
				document.querySelector(".mainTarget").innerHTML = target;
				document.querySelector(".pecentpnl").innerHTML = profitPercentage.toFixed(2) + "%";
				document.querySelector(".pnl").innerHTML = "$" + pnl.toFixed(2);
				document.querySelector(".newCapital").innerHTML = "$" + newMargin.toFixed(2);
	 	} 
	 	
}

	
