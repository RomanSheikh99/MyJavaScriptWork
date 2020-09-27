document.querySelector(".btn1").addEventListener("click",function(){
	
	document.querySelector(".demo").style.display="block";
	
});


document.querySelector(".btn1").addEventListener("dblclick",function(){
	
	document.querySelector(".demo").style.display="none";
	
});

var myTime = setInterval(myTimer,1000);

function myTimer(){

var dateObject = new Date ();
var timeObject = dateObject.toLocaleTimeString();

document.getElementById("demo1").innerHTML=dateObject;
}


var a = 0 ;

while(a <= 100){

document.write(a + "<br>");
a++
}


var arraynames = [ "Roman" ,  "Rubel" , "Amin" , "Rimi" , "duha" , "Saruar" , "Shovon" , "Prapthy" , "Milon" , "Tuhin" ,];


var getArrayLength = arraynames.length - 1;

x = 0 ;

while( x <= getArrayLength ) {
	document.write( arraynames[x] + "<br>");
	x++;
}


document.querySelector("#countrySelect").addEventListener("change",function(){
	
	var myContrySelect = this.value;
	
	if ( myContrySelect==1){
		document.querySelector("#divitionSelect1").setAttribute("style","display:block;");
	}else {
		document.querySelector("#divitionSelect1").setAttribute("style","display:none;");
		
	}
	
});


document.querySelector("#divitionSelect1").addEventListener("change",function(){
	
	var mydivitionSelect = this.value;
	
	if ( mydivitionSelect==4){
		document.querySelector("#districtSelector4").setAttribute("style","display:block;");
	}else {
		document.querySelector("#districtSelector4").setAttribute("style","display:none;");
		
	}
	
});




document.querySelector("#districtSelector4").addEventListener("change",function(){
	
	var mydistrictSelect = this.value;
	
	if ( mydistrictSelect==2){
		document.querySelector("#upozelaSelector2").setAttribute("style","display:block;");
	}else {
		document.querySelector("#upozelaSelector2").setAttribute("style","display:none;");
		
	}
	
});

























