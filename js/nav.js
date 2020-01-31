const overlaynav = document.getElementById("overlaynav");

function navDown() {
    if (overlaynav.classList.contains("navup")) {
        overlaynav.classList.add("navup");
    }
}

function navUp() {
    if (!overlaynav.classList.contains("navup")) {
        overlaynav.classList.add("navup");
    }
}

let overlaynavlinks = overlaynav.getElementsByTagName("a");

for (let i = 0; i < overlaynavlinks.length; i++) {
    let link = overlaynavlinks[i];
    link.addEventListener("click", () => {
        navUp();
    });
}

const closeNav = document.getElementById("closeNav");

closeNav.addEventListener("click", () => {
    navUp();
});
