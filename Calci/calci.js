var temp;
var oprt;
var result = 0 ;
let result1 = 0 ;
var result2 = 1 ;
var result3 = 1 ;
var count = 1;
var previous_operator;
function data_hold(value) {	
	debugger;
	var num = value;
	console.log(num);
		
	if(num=="+" || num=="-" || num=="/" || num=="*" || num=="=" ) {
		if (result1 != 0) {

		document.getElementById("input").value = result1;
		}
		document.getElementById("input").value = '';
		document.getElementById("input").value = num;
		var oprt = document.getElementById("input").value;
		operator_event(oprt, result1);
		// document.write(temp);
		// document.write(oprt);
		
		} else {

			document.getElementById("input").value+= num;
			temp = document.getElementById("input").value;
			if (previous_operator != null) {
				 operator_event(previous_operator, result1);
			}
			console.log(temp);
		}
}

function operator_event(oprt, result1) {
	switch (oprt) {
			case "+":	
			document.getElementById("input").value = '';
			if (result1 == 0) {
			var result1 = result1 + temp;
			
		}
		else{

				var additoin = add(result1, temp);
					document.getElementById("input").value = additoin;
			
			}	

				
			previous_operator = oprt;
				// document.getElementById("input").value = '';
				break;
			case "-":				
				sub();
				document.getElementById("input").value = '';
				break;
			case "*": 				
				mul();
				document.getElementById("input").value = '';
			case "/": 				
				div();
				document.getElementById("input").value = '';
							
			}
}


		function add(result1, temp) {
			// document.getElementById("input").value = '';
			var prmnt = parseInt(temp);						
			result1	= result1 + prmnt;
			console.log(result);
			temp = 0;
			return  (result1) ;
		}
		function sub() {
			// document.getElementById("input").value = '';
			var prmnt1 = parseInt(temp);						
			result1	= prmnt1 - result1;
			document.getElementById("input").value = result1 ;
			console.log(result);
			temp = 0;
		}
			function mul() {
			// document.getElementById("input").value = '';
			var prmnt2 = parseInt(temp);						
			result2	= prmnt2 * result2;
			document.getElementById("input").value = result2 ;
			console.log(result2);
			temp = 0;
		}

			function div() {
			// document.getElementById("input").value = '';
			var prmnt3 = parseInt(temp);						
			result3	= prmnt3 / result3;
			document.getElementById("input").value = result3 ;
			console.log(result3);
			temp = 0;
		}
// function oprt_hold(operator) {
// 	var	oprt =  operator;
// 	document.getElementById("input").value = oprt;
// 	if(oprt=="+" || oprt=="-" || oprt=="/" || oprt=="*" || oprt=="=" ) {
// 		console.log(document.getElementById("input").value);
// 		alert("yaou are entered a opeartoer");
// 	} else {
// 		// alert("yaou are entered a opeartoer");
// 	}
// }
function clearall() {
	document.getElementById("input").value= null;
}
function solve() {
 	var a = document.getElementById("input").value;
 	document.getElementById("input").value= (eval(a));
 	// document.write(val);
 	//document.write(oprt);

}
