/* 
 Function to calculate wind chill.
 */
function calculateWindChill(temp, wind) { 
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16); 
}

window.addEventListener("load", function() {
  const temperature = 10;  // Temperature in °C
  const windSpeed = 5;     // Wind speed in km/h
  
  const windChillElement = document.getElementById("windChill");
  
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill.toFixed(1) + " °C";
  } else {
    windChillElement.textContent = "N/A";
  }
});
  
// current year
const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

// last modified date
const lastModifiedPara = document.getElementById('lastModified');
lastModifiedPara.textContent = `Last updated: ${document.lastModified}`;