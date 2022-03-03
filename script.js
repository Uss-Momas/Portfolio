const Http = new XMLHttpRequest();
const url = "https://api.github.com/users/Uss-Momas/repos";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200){
    const response = Http.responseText;
    const response_json = JSON.parse(response)   
    console.log(response_json.length)
    for(let i = 0 ; i< response_json.length; i++){
      console.log(response_json[i].name, response_json[i].description) 
    }
  }
  
  
}


