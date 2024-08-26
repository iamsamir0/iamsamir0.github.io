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
    var path = window.location.pathname;
    var pageId = path.substring(1); // Remove leading "/"
    if (!pageId || pageId === '') {
        pageId = 'home'; // Default page
    }
    showPage(pageId);
}

function navigateToPage(pageId) {
    window.history.pushState(null, '', '/' + pageId);
    showPage(pageId);
}

// Handle browser navigation
window.onpopstate = function () {
    initializePage();
};

// Initialize page on load
initializePage();
