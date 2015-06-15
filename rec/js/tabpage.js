function tabpage(id){
	$(".active").removeClass("active");
	$(id).addClass("active");
	var page ="/rec/pages/" + id.substr(1,id.length-1) + ".html";
	$(".inner").load(page);
}


$(document).ready(function(){
	$("#other").click(function(){tabpage("#other");});
	$("#contact").click(function(){tabpage("#contact");});
	$("#about").click(function(){tabpage("#about");});
	
});

