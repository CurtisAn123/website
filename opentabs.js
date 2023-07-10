var links = document.getElementsByClassName("tab-links");
var contents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (link of links) {
        link.classList.remove("active");
    }
    for (content of contents) {
        content.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}

