var timeDate = new Date("Jan 5, 2021 10:00:00").getTime();
var run = setInterval(function(){
	var thisDate = new Date().getTime();
	var dis = timeDate - thisDate;
	
	var hours = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	var minutes = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
  	var seconds = Math.floor((dis % (1000 * 60)) / 1000);
	
	document.getElementsByClassName('hour')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;
}, 1000); 

