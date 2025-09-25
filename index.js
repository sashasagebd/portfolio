function contactClick() {
    const container = document.getElementById("contact-info");
    if(container.style.display === "none") {
        container.style.display = "block";
    }
    else {
        container.style.display = "none";
    }
}

function getPage() {
    let path = window.location.pathname
    if(path === "/" || path === "") {
        path = "/index.html";
    }
    return path.split("/").pop();
}

function highlightNav() {
    const page = getPage();
    const links = document.querySelectorAll(".nav-container a");
    links.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if(linkPage === page) {
            link.style.backgroundColor = "AliceBlue";
        }
        else {
            link.style.backgroundColor = "";
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    highlightNav();
});