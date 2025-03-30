// Hamburger menu toggle for mobile
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
    hamburgerButton.textContent = navMenu.classList.contains('visible') ? 'X' : '☰';
});

// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/320x200/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Taipei Taiwan Temple",
    location: "Taipei, Taiwan",
    dedicated: "1984, November, 17",
    area: 15200,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/320x200/taipei-taiwan-temple-lds-459051-wallpaper.jpg"
  },
  {
    templeName: "Vancouver BC Temple",
    location: "Vancouver, British Columbia",
    dedicated: "2007, August, 4",
    area: 28165,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vancouver-british-columbia/320x200/vancouver-temple-lds-866836-wallpaper.jpg"
  },
  {
    templeName: "Lisbon Portugal Temple",
    location: "Lisbon, Portugal",
    dedicated: "2019, September, 19",
    area: 23730,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/320x200/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
  },
  {
    templeName: "Albuquerque New Mexico Temple",
    location: "Albuquerque, New Mexico",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/320x200/albuquerque-temple-lds-137883-wallpaper.jpg"
  }
];

// Selectors for Navigation Links and Main Container
const navLinks = document.querySelectorAll("nav a");
const templeContainer = document.querySelector(".my-body");

// Function to Render Temple Cards
function renderTemples(templesArray) {
    // Clear existing cards
    templeContainer.innerHTML = "";

    // Generate and append each temple card
    templesArray.forEach(temple => {
        const card = document.createElement("section");
        card.className = "temple-card"; // Add a class for styling

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        // Append all elements to the card
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        // Append the card to the container
        templeContainer.appendChild(card);
    });
}

// Initial Render of All Temples
renderTemples(temples);

// Event Listeners for Navigation Links
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        const filter = event.target.textContent.toLowerCase();
        let filteredTemples;

        switch (filter) {
            case "old":
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case "new":
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case "large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples; // "Home" displays all
        }

        // Render the filtered temples
        renderTemples(filteredTemples);
    });
});