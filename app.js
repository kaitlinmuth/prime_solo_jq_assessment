$(document).ready(function(){
	$("#generator").click(function(){
		writeLine();
	});

	$("#content").on('click', "#changeColor", function(){
		$(this).closest("#newLine").toggleClass("selected");
	
	});
	$("#content").on('click', "#remove", function(){
		$(this).closest("#newLine").remove();
	});
});

var lineCount =0 ;
	
function writeLine(){
	$("#content").append("<div id='newLine'> Line #"+lineCount +"</div>");
	$("#content").children().last().append("<button id='changeColor'>Change Color</button>");
	$("#content").children().last().append("<button id='remove'>Remove</button>");
	lineCount++;
}
