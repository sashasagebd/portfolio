function getPage() {
    let path = window.location.pathname
    if(!path.split("/").pop()) {
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

function openModal(string) {
    const modal = document.getElementById(string);
    modal.style.display = "block";
}

function closeModal(string) {
    const modal = document.getElementById(string);
    modal.style.display = "none";
}