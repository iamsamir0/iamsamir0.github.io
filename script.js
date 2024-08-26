function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// Function to load the content based on the URL path
function loadContent(path) {
    const mainContent = document.getElementById("main-content");

    switch (path) {
        case '/home':
            mainContent.innerHTML = `
                <section id="home">
                    <h2>Home</h2>
                    <p>Welcome to the best Minecraft server! Join us for epic adventures and amazing builds!</p>
                </section>`;
            break;
        case '/discord':
            mainContent.innerHTML = `
                <section id="discord">
                    <h2>Discord</h2>
                    <p>Join our Discord community for the latest updates and chat with other players.</p>
                    <button onclick="window.location.href='https://discord.com/invite/yourdiscord'">Join Discord</button>
                </section>`;
            break;
        case '/ip':
            mainContent.innerHTML = `
                <section id="ip">
                    <h2>Server IP</h2>
                    <p>Connect to our server with the following IP:</p>
                    <p><strong>play.yourserver.com</strong></p>
                </section>`;
            break;
        case '/vote':
            mainContent.innerHTML = `
                <section id="vote">
                    <h2>Vote</h2>
                    <p>Help support our server by voting! Click the button below to cast your vote and get rewards!</p>
                    <button onclick="window.location.href='https://votingsite.com'">Vote Now</button>
                </section>`;
            break;
        case '/info':
            mainContent.innerHTML = `
                <section id="info">
                    <h2>Server Info</h2>
                    <p>Learn more about our server, rules, and community.</p>
                </section>`;
            break;
        default:
            mainContent.innerHTML = `
                <section id="home">
                    <h2>Home</h2>
                    <p>Welcome to the best Minecraft server! Join us for epic adventures and amazing builds!</p>
                </section>`;
            break;
    }
}

// Function to handle navigation and update the URL without reloading
function navigate(event, path) {
    event.preventDefault();
    window.history.pushState({}, "", path);
    loadContent(path);
}

// Initial load of content based on the current path
window.onload = () => loadContent(window.location.pathname);

// Handle the back/forward browser buttons
window.onpopstate = () => loadContent(window.location.pathname);
