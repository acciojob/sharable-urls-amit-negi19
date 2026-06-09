// your code here
const form=document.getElementById("form");
const url=document.getElementById("url");

form.addEventListener("submit",function(e){
	e.preventDefault();

	let name=document.getElementById("name").value;
	let year=document.getElementById("year").value;

	let query[];

	if(name)query.push(`name=${name}`);
	if(year)query.push(`year=${year}`);

	url.textContent="https://localhost:8080/";
	if(query.length>0){
		url.textContent +="?"+query.join("&");
	}
	
});