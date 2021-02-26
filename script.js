let links = document.getElementsByClassName("link");
let linktext = document.getElementsByTagName("a");
let body = document.getElementsByTagName("body")[0];
let divs = document.getElementsByTagName("div");
let svgs = document.getElementsByTagName("circle");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showPreview);
}

function showPreview(event) {

    let element = event.target.parentElement;
    let preview = element.nextSibling.nextSibling;
    
    if (element.classList.contains("open") == false) {
        preview.classList.add("show");
        element.classList.add("open");
        element.classList.add("expand");

    } else {
        preview.classList.remove("show");
        element.classList.remove("open");
        element.classList.remove("expand");
    }

    let height = element.offsetHeight;
    let currentPos = window.scrollY;
    
    window.scrollTo({
        top: currentPos + height + 20,
        behavior: "smooth"
    });

}