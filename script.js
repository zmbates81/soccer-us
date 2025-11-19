// USMNT Player Data (2024-2025 Season)
const playersData = [
    // Goalkeepers
    {
        name: "Matt Turner",
        position: "Goalkeeper",
        club: "Nottingham Forest",
        age: 30,
        caps: 35,
        goals: 0,
        assists: 0,
        cleanSheets: 12,
        saves: 89,
        minutesPlayed: 2840
    },
    {
        name: "Sean Johnson",
        position: "Goalkeeper",
        club: "Toronto FC",
        age: 35,
        caps: 15,
        goals: 0,
        assists: 0,
        cleanSheets: 5,
        saves: 42,
        minutesPlayed: 1205
    },
    {
        name: "Ethan Horvath",
        position: "Goalkeeper",
        club: "Cardiff City",
        age: 29,
        caps: 10,
        goals: 0,
        assists: 0,
        cleanSheets: 3,
        saves: 28,
        minutesPlayed: 810
    },
    {
        name: "Patrick Schulte",
        position: "Goalkeeper",
        club: "Columbus Crew",
        age: 23,
        caps: 3,
        goals: 0,
        assists: 0,
        cleanSheets: 1,
        saves: 12,
        minutesPlayed: 270
    },

    // Defenders
    {
        name: "Antonee Robinson",
        position: "Defender",
        club: "Fulham",
        age: 27,
        caps: 52,
        goals: 2,
        assists: 8,
        cleanSheets: 18,
        tackles: 124,
        minutesPlayed: 4320
    },
    {
        name: "Sergiño Dest",
        position: "Defender",
        club: "PSV Eindhoven",
        age: 24,
        caps: 35,
        goals: 3,
        assists: 7,
        cleanSheets: 12,
        tackles: 89,
        minutesPlayed: 2890
    },
    {
        name: "Joe Scally",
        position: "Defender",
        club: "Borussia Mönchengladbach",
        age: 21,
        caps: 12,
        goals: 0,
        assists: 3,
        cleanSheets: 4,
        tackles: 56,
        minutesPlayed: 1020
    },
    {
        name: "Chris Richards",
        position: "Defender",
        club: "Crystal Palace",
        age: 24,
        caps: 18,
        goals: 1,
        assists: 0,
        cleanSheets: 6,
        tackles: 67,
        minutesPlayed: 1485
    },
    {
        name: "Cameron Carter-Vickers",
        position: "Defender",
        club: "Celtic",
        age: 27,
        caps: 21,
        goals: 2,
        assists: 1,
        cleanSheets: 9,
        tackles: 78,
        minutesPlayed: 1710
    },
    {
        name: "Tim Ream",
        position: "Defender",
        club: "Charlotte FC",
        age: 37,
        caps: 58,
        goals: 1,
        assists: 2,
        cleanSheets: 20,
        tackles: 142,
        minutesPlayed: 4890
    },
    {
        name: "Mark McKenzie",
        position: "Defender",
        club: "Toulouse",
        age: 25,
        caps: 14,
        goals: 0,
        assists: 1,
        cleanSheets: 5,
        tackles: 48,
        minutesPlayed: 1140
    },
    {
        name: "Miles Robinson",
        position: "Defender",
        club: "FC Cincinnati",
        age: 27,
        caps: 25,
        goals: 3,
        assists: 1,
        cleanSheets: 8,
        tackles: 92,
        minutesPlayed: 2070
    },
    {
        name: "John Tolkin",
        position: "Defender",
        club: "New York Red Bulls",
        age: 22,
        caps: 5,
        goals: 0,
        assists: 2,
        cleanSheets: 2,
        tackles: 34,
        minutesPlayed: 415
    },

    // Midfielders
    {
        name: "Weston McKennie",
        position: "Midfielder",
        club: "Juventus",
        age: 26,
        caps: 62,
        goals: 13,
        assists: 9,
        cleanSheets: 0,
        passAccuracy: 87,
        minutesPlayed: 5280
    },
    {
        name: "Tyler Adams",
        position: "Midfielder",
        club: "Bournemouth",
        age: 25,
        caps: 44,
        goals: 2,
        assists: 4,
        cleanSheets: 0,
        passAccuracy: 89,
        minutesPlayed: 3640
    },
    {
        name: "Yunus Musah",
        position: "Midfielder",
        club: "Valencia",
        age: 21,
        caps: 38,
        goals: 1,
        assists: 5,
        cleanSheets: 0,
        passAccuracy: 85,
        minutesPlayed: 3120
    },
    {
        name: "Johnny Cardoso",
        position: "Midfielder",
        club: "Real Betis",
        age: 23,
        caps: 9,
        goals: 1,
        assists: 2,
        cleanSheets: 0,
        passAccuracy: 88,
        minutesPlayed: 720
    },
    {
        name: "Gianluca Busio",
        position: "Midfielder",
        club: "Venezia",
        age: 22,
        caps: 11,
        goals: 0,
        assists: 3,
        cleanSheets: 0,
        passAccuracy: 84,
        minutesPlayed: 855
    },
    {
        name: "Malik Tillman",
        position: "Midfielder",
        club: "PSV Eindhoven",
        age: 22,
        caps: 8,
        goals: 2,
        assists: 4,
        cleanSheets: 0,
        passAccuracy: 82,
        minutesPlayed: 615
    },
    {
        name: "Luca de la Torre",
        position: "Midfielder",
        club: "Celta Vigo",
        age: 26,
        caps: 20,
        goals: 1,
        assists: 3,
        cleanSheets: 0,
        passAccuracy: 86,
        minutesPlayed: 1560
    },
    {
        name: "Aidan Morris",
        position: "Midfielder",
        club: "Middlesbrough",
        age: 23,
        caps: 4,
        goals: 0,
        assists: 1,
        cleanSheets: 0,
        passAccuracy: 83,
        minutesPlayed: 285
    },

    // Forwards
    {
        name: "Christian Pulisic",
        position: "Forward",
        club: "AC Milan",
        age: 26,
        caps: 73,
        goals: 31,
        assists: 21,
        cleanSheets: 0,
        shotsOnTarget: 156,
        minutesPlayed: 6120
    },
    {
        name: "Gio Reyna",
        position: "Forward",
        club: "Borussia Dortmund",
        age: 22,
        caps: 33,
        goals: 9,
        assists: 11,
        cleanSheets: 0,
        shotsOnTarget: 78,
        minutesPlayed: 2565
    },
    {
        name: "Timothy Weah",
        position: "Forward",
        club: "Juventus",
        age: 24,
        caps: 40,
        goals: 5,
        assists: 9,
        cleanSheets: 0,
        shotsOnTarget: 62,
        minutesPlayed: 3240
    },
    {
        name: "Folarin Balogun",
        position: "Forward",
        club: "Monaco",
        age: 23,
        caps: 15,
        goals: 7,
        assists: 3,
        cleanSheets: 0,
        shotsOnTarget: 45,
        minutesPlayed: 1170
    },
    {
        name: "Ricardo Pepi",
        position: "Forward",
        club: "PSV Eindhoven",
        age: 21,
        caps: 28,
        goals: 10,
        assists: 4,
        cleanSheets: 0,
        shotsOnTarget: 54,
        minutesPlayed: 2160
    },
    {
        name: "Haji Wright",
        position: "Forward",
        club: "Coventry City",
        age: 26,
        caps: 10,
        goals: 4,
        assists: 2,
        cleanSheets: 0,
        shotsOnTarget: 28,
        minutesPlayed: 780
    },
    {
        name: "Josh Sargent",
        position: "Forward",
        club: "Norwich City",
        age: 24,
        caps: 24,
        goals: 8,
        assists: 5,
        cleanSheets: 0,
        shotsOnTarget: 51,
        minutesPlayed: 1920
    },
    {
        name: "Brenden Aaronson",
        position: "Forward",
        club: "Union Berlin",
        age: 24,
        caps: 45,
        goals: 8,
        assists: 12,
        cleanSheets: 0,
        shotsOnTarget: 67,
        minutesPlayed: 3645
    },
    {
        name: "Cade Cowell",
        position: "Forward",
        club: "Guadalajara",
        age: 21,
        caps: 6,
        goals: 1,
        assists: 1,
        cleanSheets: 0,
        shotsOnTarget: 14,
        minutesPlayed: 420
    }
];

// Global variables
let currentFilter = 'all';
let currentSort = 'name';
let searchTerm = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderPlayers();
    updateOverallStats();
    initializeEventListeners();
});

// Event Listeners
function initializeEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.position;
            renderPlayers();
        });
    });

    // Search input
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderPlayers();
    });

    // Sort select
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderPlayers();
    });

    // Modal close
    const modal = document.getElementById('playerModal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Filter, search, and sort players
function getFilteredPlayers() {
    let filtered = playersData;

    // Filter by position
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.position === currentFilter);
    }

    // Search by name, club, or position
    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.club.toLowerCase().includes(searchTerm) ||
            p.position.toLowerCase().includes(searchTerm)
        );
    }

    // Sort
    filtered.sort((a, b) => {
        switch(currentSort) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'caps':
                return b.caps - a.caps;
            case 'goals':
                return b.goals - a.goals;
            case 'age':
                return a.age - b.age;
            case 'club':
                return a.club.localeCompare(b.club);
            default:
                return 0;
        }
    });

    return filtered;
}

// Render player cards
function renderPlayers() {
    const grid = document.getElementById('playersGrid');
    const filtered = getFilteredPlayers();

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="loading">No players found</div>';
        return;
    }

    grid.innerHTML = filtered.map(player => `
        <div class="player-card" data-position="${player.position}" onclick="showPlayerDetails('${player.name}')">
            <div class="player-header">
                <div>
                    <div class="player-name">${highlightText(player.name)}</div>
                    <div class="player-club">${highlightText(player.club)}</div>
                    <div class="player-age">Age: ${player.age}</div>
                </div>
                <div class="player-position">${player.position.substring(0, 3).toUpperCase()}</div>
            </div>
            <div class="player-stats">
                <div class="stat-item">
                    <span class="stat-value">${player.caps}</span>
                    <span class="stat-name">Caps</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${player.goals}</span>
                    <span class="stat-name">Goals</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${player.assists}</span>
                    <span class="stat-name">Assists</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Highlight search terms
function highlightText(text) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Show player details in modal
function showPlayerDetails(playerName) {
    const player = playersData.find(p => p.name === playerName);
    if (!player) return;

    const modal = document.getElementById('playerModal');
    const modalBody = document.getElementById('modalBody');

    let additionalStats = '';

    if (player.position === 'Goalkeeper') {
        additionalStats = `
            <div class="modal-stat-box">
                <span class="modal-stat-value">${player.cleanSheets}</span>
                <span class="modal-stat-label">Clean Sheets</span>
            </div>
            <div class="modal-stat-box">
                <span class="modal-stat-value">${player.saves}</span>
                <span class="modal-stat-label">Saves</span>
            </div>
        `;
    } else if (player.position === 'Defender') {
        additionalStats = `
            <div class="modal-stat-box">
                <span class="modal-stat-value">${player.cleanSheets}</span>
                <span class="modal-stat-label">Clean Sheets</span>
            </div>
            <div class="modal-stat-box">
                <span class="modal-stat-value">${player.tackles}</span>
                <span class="modal-stat-label">Tackles</span>
            </div>
        `;
    } else if (player.position === 'Midfielder') {
        additionalStats = `
            <div class="modal-stat-box">
                <span class="modal-stat-value">${player.passAccuracy}%</span>
                <span class="modal-stat-label">Pass Accuracy</span>
            </div>
        `;
    } else if (player.position === 'Forward') {
        additionalStats = `
            <div class="modal-stat-box">
                <span class="modal-stat-value">${player.shotsOnTarget}</span>
                <span class="modal-stat-label">Shots on Target</span>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-player-header">
            <h2 class="modal-player-name">${player.name}</h2>
            <p class="modal-player-info">${player.position} • ${player.club}</p>
            <p class="modal-player-info">Age: ${player.age}</p>
        </div>
        <div class="modal-stats-grid">
            <div class="modal-stat-box">
                <span class="modal-stat-value">${player.caps}</span>
                <span class="modal-stat-label">Caps</span>
            </div>
            <div class="modal-stat-box">
                <span class="modal-stat-value">${player.goals}</span>
                <span class="modal-stat-label">Goals</span>
            </div>
            <div class="modal-stat-box">
                <span class="modal-stat-value">${player.assists}</span>
                <span class="modal-stat-label">Assists</span>
            </div>
            <div class="modal-stat-box">
                <span class="modal-stat-value">${player.minutesPlayed.toLocaleString()}</span>
                <span class="modal-stat-label">Minutes Played</span>
            </div>
            ${additionalStats}
            <div class="modal-stat-box">
                <span class="modal-stat-value">${(player.goals + player.assists)}</span>
                <span class="modal-stat-label">G+A</span>
            </div>
            <div class="modal-stat-box">
                <span class="modal-stat-value">${(player.minutesPlayed / player.caps).toFixed(0)}</span>
                <span class="modal-stat-label">Avg Minutes/Game</span>
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// Update overall statistics
function updateOverallStats() {
    const totalPlayers = playersData.length;
    const totalCaps = playersData.reduce((sum, p) => sum + p.caps, 0);
    const totalGoals = playersData.reduce((sum, p) => sum + p.goals, 0);
    const avgAge = (playersData.reduce((sum, p) => sum + p.age, 0) / totalPlayers).toFixed(1);

    // Animate numbers
    animateValue('totalPlayers', 0, totalPlayers, 1000);
    animateValue('totalCaps', 0, totalCaps, 1500);
    animateValue('totalGoals', 0, totalGoals, 1500);
    animateValue('avgAge', 0, parseFloat(avgAge), 1000, true);
}

// Animate number counting
function animateValue(id, start, end, duration, isDecimal = false) {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = isDecimal ? end.toFixed(1) : Math.round(end);
            clearInterval(timer);
        } else {
            element.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
        }
    }, 16);
}
