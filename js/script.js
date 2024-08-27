function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    const pageTitle = document.getElementById('page-title');

    // Check if we are on GitHub Pages (using a workaround for 404.html routing)
    const basePath = window.location.pathname.startsWith('/iamsamir123.gitub.io/')
        ? 'iamsamir123.github.io'
        : '';

    window.history.pushState({}, "", `${basePath}/${page}`);

    let content = '';
    switch (page) {
        case 'home':
            pageTitle.textContent = 'Home';
            content = `<section><h2>Home</h2><p>Welcome to the best Minecraft server! Join us for epic adventures and amazing builds!</p></section>`;
            break;
        case 'discord':
            pageTitle.textContent = 'Discord';
            content = `<section><h2>Discord</h2><p>Join our Discord community for the latest updates and chat with other players.</p><div class="center-button"><button onclick="window.location.href='https://discord.com/invite/yourdiscord'">Join Discord</button></div></section>`;
            break;
        case 'ip':
            pageTitle.textContent = 'Server IP';
            content = `<section><h2>Server IP</h2><p>Connect to our server with the following IP:</p><p><strong>play.yourserver.com</strong></p></section>`;
            break;
        case 'vote':
            pageTitle.textContent = 'Vote';
            content = `<section><h2>Vote</h2><p>Help support our server by voting! Click the button below to cast your vote and get rewards!</p><div class="center-button"><button onclick="window.location.href='https://votingsite.com'">Vote Now</button></div></section>`;
            break;
        case 'info':
            pageTitle.textContent = 'Info';
            content = `<section><h2>Server Info</h2><p>Learn more about our server, rules, and community.</p></section>`;
            break;
        default:
            pageTitle.textContent = 'Home';
            content = `<section><h2>Home</h2><p>Welcome to the best Minecraft server! Join us for epic adventures and amazing builds!</p></section>`;
            break;
    }
    mainContent.innerHTML = content;
}

window.addEventListener('load', () => {
    // Load the appropriate page content based on the current URL
    const path = window.location.pathname.split('/')[2]; // Adjust index for GitHub Pages
    loadPage(path || 'home');
});

window.addEventListener('popstate', () => {
    const path = window.location.pathname.split('/')[2]; // Adjust index for GitHub Pages
    loadPage(path || 'home');
});
