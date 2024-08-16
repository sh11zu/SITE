// Example data for Shinobis
const shinobis = [
    {
        rang: 1,
        equipe: [{ name: "[AME] Amegakure", image: "ame.png" }],
        shinobi: "Nagato Uzumaki",
        ligue: "Platinum",
        points: 11,
        mj: 16,
        w: 9,
        l: 7,
        wr: "56.25%"
    },
    {
        rang: 2,
        equipe: [{ name: "[AME] Amegakure", image: "ame.png" }],
        shinobi: "Konan",
        ligue: "Palladium",
        points: 9,
        mj: 14,
        w: 6,
        l: 8,
        wr: "42.86%"
    },
    // Add more shinobis similarly...
];

// Example data for Teams
const teams = [
    { rang: 1, team: "[AME] Amegakure", points: 37, mj: 32, w: 22, l: 10, wr: "68.75%" },
    { rang: 2, team: "[ROG] Exo Rogue", points: 50, mj: 45, w: 30, l: 15, wr: "66.67%" },
    // Add more teams similarly...
];

// Example data for Regions
const regions = [
    { rang: 1, region: "Fire", points: 120, mj: 100, w: 75, l: 25, wr: "75%" },
    { rang: 2, region: "Earth", points: 110, mj: 90, w: 65, l: 25, wr: "72.22%" },
    // Add more regions similarly...
];

// Function to populate Ninja table with shinobi data
function populateNinjaTable(data = shinobis) {
    const tableBody = document.querySelector('#ninja-rankings tbody');
    tableBody.innerHTML = "";  // Clear existing rows

    data.forEach(shinobi => {
        const row = document.createElement('tr');
        const fields = ['rang', 'equipe', 'shinobi', 'ligue', 'points', 'mj', 'w', 'l', 'wr'];
        
        fields.forEach(field => {
            const cell = document.createElement('td');
            if (field === 'equipe') {
                const equipeGrid = document.createElement('div');
                equipeGrid.className = 'equipe-grid';
                shinobi.equipe.forEach(equipe => {
                    const img = document.createElement('img');
                    img.src = `/static/teams/${equipe.image}`;
                    img.alt = equipe.name;
                    const span = document.createElement('span');
                    span.textContent = equipe.name;
                    equipeGrid.appendChild(img);
                    equipeGrid.appendChild(span);
                });
                cell.appendChild(equipeGrid);
            } else {
                cell.textContent = shinobi[field];
            }
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

// Function to populate Team table
function populateTeamTable(data = teams) {
    const tableBody = document.querySelector('#team-rankings tbody');
    tableBody.innerHTML = "";  // Clear existing rows

    data.forEach(team => {
        const row = document.createElement('tr');
        const fields = ['rang', 'team', 'points', 'mj', 'w', 'l', 'wr'];
        
        fields.forEach(field => {
            const cell = document.createElement('td');
            cell.textContent = team[field];
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

// Function to populate Region table
function populateRegionTable(data = regions) {
    const tableBody = document.querySelector('#region-rankings tbody');
    tableBody.innerHTML = "";  // Clear existing rows

    data.forEach(region => {
        const row = document.createElement('tr');
        const fields = ['rang', 'region', 'points', 'mj', 'w', 'l', 'wr'];

        fields.forEach(field => {
            const cell = document.createElement('td');
            cell.textContent = region[field];
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

// Event listener for table toggling between Ninjas, Teams, and Regions
document.addEventListener('DOMContentLoaded', () => {
    const ninjaBtn = document.getElementById('toggle-ninja');
    const teamBtn = document.getElementById('toggle-team');
    const regionBtn = document.getElementById('toggle-region');
    const ninjaTable = document.getElementById('ninja-rankings');
    const teamTable = document.getElementById('team-rankings');
    const regionTable = document.getElementById('region-rankings');

    // Initially show Ninja table
    ninjaTable.style.display = 'table';
    teamTable.style.display = 'none';
    regionTable.style.display = 'none';

    // Toggle Ninja Rankings
    ninjaBtn.addEventListener('click', () => {
        ninjaTable.style.display = 'table';
        teamTable.style.display = 'none';
        regionTable.style.display = 'none';
        populateNinjaTable();  // Populate Ninja Table on click
    });

    // Toggle Team Rankings
    teamBtn.addEventListener('click', () => {
        ninjaTable.style.display = 'none';
        teamTable.style.display = 'table';
        regionTable.style.display = 'none';
        populateTeamTable();  // Populate Team Table on click
    });

    // Toggle Region Rankings
    regionBtn.addEventListener('click', () => {
        ninjaTable.style.display = 'none';
        teamTable.style.display = 'none';
        regionTable.style.display = 'table';
        populateRegionTable();  // Populate Region Table on click
    });

    // Initially populate the Ninja table
    populateNinjaTable();
});
