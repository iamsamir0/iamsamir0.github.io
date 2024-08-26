function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    var activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block';
    }
}

function initializePage() {
    var urlParams = new URLSearchParams(window.location.search);
    var page = urlParams.get('page') || 'home';
    showPage(page);
}
