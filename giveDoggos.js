const loaderEl = document.createElement("div");
loaderEl.innerText = "loading";

loaderEl.style.fontSize = "60px";
loaderEl.style.fontFamily = "Arial";
loaderEl.style.border = "solid black 1px";
loaderEl.style.width = "25%";
loaderEl.style.height = "300px";
loaderEl.style.textAlignLast = "center";

const doggoGrid = document.querySelector(".doggoGrid");
const DOG_CEO_URL = "https://dog.ceo/api/breeds/image/random";

function showLoader() {
    doggoGrid.appendChild(loaderEl);
}

function hideLoader() {
    loaderEl.remove();
}

function addDoggo() {
    showLoader();
    fetch(DOG_CEO_URL)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            // json.message contains a random dog image url
            const imageEl = createDoggoImageElement(json.message);
            // add the div + img to the grid container
            doggoGrid.appendChild(imageEl);
            hideLoader();
        });
}

function createDoggoImageElement(url) {
    // create a div
    const div = document.createElement("div");
    // set the class of the div
    div.className = "doggo";
    // create an img tag
    const img = document.createElement("img");
    // set the image src to the passed in url
    img.src = url;
    // set the image class
    img.className = "doggoImage";
    // add the img tag to the div
    div.appendChild(img);
    // give the div (with img tag in it) back to whatever called the function
    return div;
}

document.querySelector(".add-doggo").addEventListener("click", () => {
    console.log("doggo");
    // When the button is clicked, add a doggo
    addDoggo();
});
