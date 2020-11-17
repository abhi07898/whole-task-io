var arr_for_task = [];
var html='';
var html1 = '';
// hold_val() method basically  used for hold the valu that comes from user  end;
function hold_val() { 
	var task_input = document.getElementById('inp-task').value;
	if (task_input=='') {
		alert('hey can u pleaseeneter some words related to your tsak');
	} else {
		arr_for_task.push(task_input);	
		show_task();
	}	
}
// show task() method i susded for show the valu inouted by user in the form of a table .........
function show_task () {
	document.getElementById('inp-task').value='';	
	html = "";
	html+= "<table id='table-design'> <tr> <th>Sr-No </th> <th>Done/panding </th><th>Task-Name</th> <th>Edited Content</th><th>Action</th>";
	for (var i=0; i<arr_for_task.length; i++) {
	html+="<tr> <td>"+(i+1)+"</td><td><input type='checkbox' id='doneorpanding("+i+")' onclick='donePend("+i+")'></td><td>"+arr_for_task[i]+"</td><td><input type='text' id='edit-content("+i+")' class = 'edit-content'></td><td> <a href='#' onclick='delet("+i+")'> DELETE</a> <a href='#'onclick='edit("+i+")' id='edit'> EDIT</a> </td></tr>";
	}
	html+="</table>";
	document.getElementById('entered_task').innerHTML = html;
	div_heading = "";
	div_heading+= "<div id='head-design' class='head-design' style='padding: 10px;text-align: center;background-color: gray;font-size: 30px;color: white;'> The pending Task are showing Below -------!! </div>";
	document.getElementById('head-design').innerHTML=div_heading ;
}
// delet() mathod is basically used for delet the content if user clicked on delte link
function delet(a){
	for(var i=0;i<arr_for_task.length;i++) {
		if(i==a) {
		arr_for_task.splice(i,1);
		show_task();		
		}
	}
}
// edit() function is basicllay used for edit the entered value of user and update it 
function edit(a) {	
	for(var i=0;i<arr_for_task.length;i++) {
		if (a===i) {			
			if(document.getElementById("edit-content("+i+")").value == '') {
				document.getElementById("edit-content("+i+")").value = arr_for_task[a];
			} else {
				arr_for_task[a] = document.getElementById("edit-content("+i+")").value;
				show_task();
			}
		}
			
	}
}
var done_arr = [];
// done or panding function--> this function is used for changing the position of content id user completed their task
function donePend(a) {
	for(var i=0;i<arr_for_task.length;i++) {
		var checkBox = document.getElementById("doneorpanding("+i+")"); 
		if(checkBox.checked == true) {
			debugger;
			if (a===i) {			
				done_arr.push(arr_for_task[a]);
				arr_for_task.splice(a,1);
				show_task(); // calling of show_task() function that show the updated value of tablem							
			}	
			show_task_2();	// calling of show_task-2() function  that wil show the completed task  list 
		}
	}
}

//  show_task-2() function is creating for show the table of completed task if user clicked on checkbox from the task-list
function show_task_2() {
	html1 = "";
	html1+= "<table id='table-design'> <tr> <th>Sr-No </th> <th>Done/panding </th><th>Task-Name</th> <th>Edited Content</th><th>Action</th>";
	for (var i=0; i<done_arr.length; i++) {
	html1+="<tr> <td>"+(i+1)+"</td><td><input type='checkbox' id='doneorpanding("+i+")' onclick='donePendd("+i+")' checked></td><td>"+done_arr[i]+"</td><td><input type='text' id='edit-contentt("+i+")' class = 'edit-content'></td><td> <a href='#' onclick='delett("+i+")'> DELETE</a> <a href='#'onclick='editt("+i+")' id='edit'> EDIT</a> </td></tr>";
	}
	html1+="</table>";
	document.getElementById('done_task').innerHTML = html1;
	div_headingg = "";
	div_headingg+= "<div id='head-design1' class='head-design' style='padding: 10px;margin-top: 10px;text-align: center;background-color: gray;font-size: 30px;color: white;'> The Task you have alreay done are showing Below -------!! </div>";
	document.getElementById('head-design1').innerHTML=div_headingg ;
}

// delett()for delet the conetnt from table of task-completed
function delett(a){
	for(var i=0;i<done_arr.length;i++) {
		if(i==a) {
		done_arr.splice(i,1);
		show_task_2();		
		}
	}
}
// edit() function for edit the content of task-completed table 
function editt(a) {	
	for(var i=0;i<done_arr.length;i++) {
		if (a===i) {			
			if(document.getElementById("edit-contentt("+i+")").value == '') {
				document.getElementById("edit-contentt("+i+")").value = done_arr[a];
			} else {	
				done_arr[a] = document.getElementById("edit-contentt("+i+")").value;
				show_task_2();
			}
		}
			
	}
}


function donePendd(a) {
	for(var i=0;i<done_arr.length;i++) {
		var checkBox = document.getElementById("doneorpanding("+i+")"); 
		if(checkBox.checked !== true) {
			debugger;
			if (a===i) {
				arr_for_task.push(done_arr[a]);
				done_arr.splice(a,1);
				show_task_2();							
			}	
			show_task();	// 
		}
	}
}