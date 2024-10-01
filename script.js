const fileInput = document.getElementById('fileInput');
const convertBtn = document.getElementById('convertBtn');
const resolutionSelect = document.getElementById('resolution');
const downloadSection = document.getElementById('downloadSection');
const downloadBtn = document.getElementById('downloadBtn');
const themeToggleBtn = document.getElementById('toggleTheme');
let currentFile = null;

themeToggleBtn.addEventListener('click', toggleTheme);

// Handle file input
fileInput.addEventListener('change', (e) => {
    currentFile = e.target.files[0];
    if (currentFile) {
        console.log('File selected:', currentFile.name);
    }
});

// Conversion simulation
convertBtn.addEventListener('click', () => {
    if (currentFile) {
        const resolution = resolutionSelect.value;
        console.log(`Converting file to ${resolution} resolution...`);

        // Placeholder for actual conversion logic
        setTimeout(() => {
            alert(`File converted to ${resolution} successfully!`);
            downloadSection.classList.remove('hidden');
        }, 1000);
    } else {
        alert('Please select a file first.');
    }
});

// Download functionality (simulated)
downloadBtn.addEventListener('click', () => {
    alert('File downloaded successfully!');
});

// Toggle between dark and light themes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
