const fileInput = document.getElementById('fileInput');
const convertBtn = document.getElementById('convertBtn');
const resolutionSelect = document.getElementById('resolution');
const formatSelect = document.getElementById('format');
const downloadSection = document.getElementById('downloadSection');
const downloadLink = document.getElementById('downloadLink');
let currentFile = null;

// Handle file input
fileInput.addEventListener('change', (e) => {
    currentFile = e.target.files[0];
    if (currentFile) {
        console.log('File selected:', currentFile.name);
    }
});

// Conversion simulation and download generation
convertBtn.addEventListener('click', () => {
    if (currentFile) {
        const resolution = resolutionSelect.value;
        const format = formatSelect.value;

        console.log(`Converting file to ${resolution} resolution and ${format} format...`);

        // Simulate conversion process (This needs to be done server-side)
        setTimeout(() => {
            alert(`File converted to ${resolution} and ${format} successfully!`);
            
            // Simulate a converted file (In real use case, this will be replaced by the backend processed file URL)
            const blob = new Blob([currentFile], { type: `image/${format}` });
            const url = URL.createObjectURL(blob);

            downloadLink.href = url;
            downloadLink.download = `converted.${format}`;
            downloadSection.classList.remove('hidden');
        }, 1500);
    } else {
        alert('Please select a file first.');
    }
});
