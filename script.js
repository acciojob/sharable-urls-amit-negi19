// your code here
const button=document.getElementById("button");
const url=document.getElementById("url");

button.addEventListener("click",function(e){
	e.preventDefault();

	const name=document.getElementById("name").value;
	const year=document.getElementById("year").value;

	let result="https://localhost:8080/";

	if(name&&year){result+= `?name=${name}&year=${year}`;
	}				 
	else if{(name)result+=`?name=${name}`;
    }
	else if(year){
	result+= `?year=${year}`;
	}

	url.textContent=result;
	
});