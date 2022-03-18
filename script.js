//Using AJAX request

//const Http = new XMLHttpRequest();
//const url = "https://api.github.com/users/Uss-Momas/repos";
//Http.open("GET", url);
//Http.send();
/*
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
*/

function cardDiv(name, description, stars, branchs, language) {
  return `
  <div class="project-title-container">
    <img src="./assets/folder.svg" alt="folder-icon">
    <p class="project-title">${name}</p>
  </div>
  <p class="project-content">${description}</p>
  <div class="project-footer-container">
    <div class="git-branch-star">
      <img src="./assets/star.svg" alt="star">
      <p class="project-footer-container-value">${stars}</p>
      <img src="./assets/git-branch.svg" alt="git-branch">
      <p class="project-footer-container-value">${branchs}</p>
    </div>
    <div class="technologies-used">
      <p class="project-footer-container-value">${language}</p>
    </div>
  </div>
  `;
}

const section = document.querySelector(".projects");
fetch("https://api.github.com/users/Uss-Momas/repos")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(function (item) {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      fetch(`https://api.github.com/repos/Uss-Momas/${item.name}/branches`)
        .then((response) => response.json())
        .then((data) => {
          let lang = item.language
          if(lang === null){
            lang = ""
          }
          card.innerHTML = cardDiv(
            item.name,
            item.description,
            item.stargazers_count,
            data.length,
            item.language
          );
          section.appendChild(card);
        });
    });
  });
