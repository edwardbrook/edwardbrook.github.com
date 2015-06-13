xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","/rec/xml/LIST.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

var x = xmlDoc.getElementsByTagName("ARTICLE");
var l = x.length;

function addarticle(l){
	var id = x[l].getElementsByTagName("ID")[0].childNodes[0].nodeValue;
	var title = x[l].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
	var date = x[l].getElementsByTagName("DATE")[0].childNodes[0].nodeValue;
	var perview = x[l].getElementsByTagName("PERVIEW")[0].childNodes[0].nodeValue;
	var inner = "<a href=/p/"+ id + ".html><h2>"+title+"</h2>"+"</a>"+"<p>"+perview+"</p>"+"<div class=\"date\">"+date+"</div>";
	var container = "<div class = \"perview\" id=a"+l+"></div><hr />";
	$("#sign").after(container);
	var s="#a"+l;
	$(s).append(inner);
}

for(var n = l-5;n<l;n++ ){
	addarticle(n);
}