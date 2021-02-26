let links = document.getElementsByClassName("link");
let linktext = document.getElementsByTagName("a");
let body = document.getElementsByTagName("body")[0];
let divs = document.getElementsByTagName("div");
let svgs = document.getElementsByTagName("circle");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showPreview);
    // links[i].addEventListener("touchstart", showPreview);
}

function showPreview(event) {
    // let element = event.target;
    // let preview = event.target.nextSibling.nextSibling;
    
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
    console.log(height);

    let currentPos = window.scrollY;
    window.scrollTo(0, currentPos + height);

}

function toSunRise() {
    body.classList.add("sunrise");
    body.classList.remove("sunset");

    console.log(svgs[0].childNodes[1]);
    
    for (let i = 0; i < linktext.length; i++) {
        linktext[i].classList.add("linksunrise");
        linktext[i].classList.remove("linksunset");
    }

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("divsunrise");
        divs[i].classList.remove("divsunset");
    }

    for (i in svgs) {
        svgs[i].style.stroke="#5D1A38";
    }
}

function toSunSet() {
    body.classList.add("sunset");
    body.classList.remove("sunrise");

    for (let i = 0; i < linktext.length; i++) {
        linktext[i].classList.add("linksunset");
        linktext[i].classList.remove("linksunrise");
    }

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("divsunset");
        divs[i].classList.remove("divsunrise");
    }

    for (i in svgs) {
        svgs[i].style.stroke="#FFC105";
    }
}