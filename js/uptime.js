window.onload = function() {
    fetchServerStatus();
};

function fetchServerStatus() {
    // Replace this URL with your actual server status API endpoint
    const serverApiUrl = 'https://api.mcsrvstat.us/2/DE-1.scarceshost.uk';
    
    fetch(serverApiUrl)
        .then(response => response.json())
        .then(data => {
            const statusElement = document.getElementById('status');
            const playersElement = document.getElementById('players');
            
            if (data.online) {
                statusElement.textContent = 'Online';
                playersElement.textContent = data.players.online + ' / ' + data.players.max;
            } else {
                statusElement.textContent = 'Offline';
                playersElement.textContent = '0 / 0';
            }
        })
        .catch(error => {
            console.error('Error fetching server status:', error);
            document.getElementById('status').textContent = 'Error';
            document.getElementById('players').textContent = 'N/A';
        });
}
