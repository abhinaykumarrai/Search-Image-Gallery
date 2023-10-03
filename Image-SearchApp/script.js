const accessKey = "WewsFZ_V3uZ67c-TVP0ho5q-vgfFmHosneP_t41wbQ0";


const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("searchInput");
const searchResults = document.querySelector(".searchResults");
const showMore = document.getElementById("showMoreButton");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        searchResults.innerHTML = "";
    }

    results.map((result) => {

         const imageWrapper = document.createElement("div");
         imageWrapper.classList.add("searchRes");

         const image = document.createElement("img");
         image.src =  result.urls.small; 
         image.alt = result.alt_description;  

         const imageLink = document.createElement("a");
         imageLink.href = result.links.html;
         imageLink.target = "_blank";
         imageLink.textContent = result.alt_description

         imageWrapper.appendChild(image);
         imageWrapper.appendChild(imageLink);
         searchResults.appendChild(imageWrapper);
        });


        page++;
        if(page > 1){
            showMore.style.display = "block";  
        }
}

formE1.addEventListener("submit",(element)=>{
    element.preventDefault();
    page = 1;
    searchImages();
});
showMore.addEventListener("click",()=>{
    searchImages();
});













