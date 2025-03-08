// Set the current year
const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

// Set the last modified date
const lastModifiedPara = document.getElementById('lastModified');
lastModifiedPara.textContent = `Last updated: ${document.lastModified}`;