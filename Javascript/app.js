function closeNav() {
		$("#mySidenav").css("width","0");
		// $("#app").css("marginLeft","0");
		// $("body").css("backgroundColor","#fff");
	}
function openNav() {
	$("#mySidenav").css("width","250px");
	// $("#app").css("marginLeft","250px");
	// $("body").css("backgroundColor","rgba(0,0,0,0.4)");
}
var myDate = new Date();
var displayDate = (myDate.getDate()) + '/' + (myDate.getMonth()+1) + '/' + myDate.getFullYear();
console.log(displayDate);