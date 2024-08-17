document.addEventListener('DOMContentLoaded', () => {
    console.log("Ninja list page loaded");

    function calculateWinRate(wins, totalGames) {
        if (totalGames === 0) return '0%';
        return ((wins / totalGames) * 100).toFixed(2) + '%';
    }

    // Fonction pour charger les données dans le tableau
    function loadMembresData() {
        fetch('http://localhost:3003/api/membres')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#ninja-table tbody');
                tableBody.innerHTML = ''; // Effacer les anciennes données du tableau

                data.forEach(row => {
                    // Calculer le WinRate
                    const winRate = calculateWinRate(row.w, row.mj);

                    // Insérer une nouvelle ligne
                    const newRow = `
                        <tr>
                            <td>${row.matricule}</td>
                            <td>${row.nationalite}</td>
                            <td>${row.fk_region}</td>
                            <td>${row.fk_equipe}</td>
                            <td>${row.shinobi}</td>
                            <td>${row.titres}</td>
                            <td>${row.ligue}</td>
                            <td>${row.points}</td>
                            <td>${row.mj}</td>
                            <td>${row.w}</td>
                            <td>${row.l}</td>
                            <td></td> <!-- Rang est vide -->
                            <td>${winRate}</td>
                            <td>${row.premiere_annee}</td>
                        </tr>
                    `;
                    tableBody.insertAdjacentHTML('beforeend', newRow);
                });

                // Initialiser DataTables après avoir inséré les données
                $('#ninja-table').DataTable();
            })
            .catch(error => console.error('Erreur lors du chargement des données :', error));
    }

    // Charger les données lorsque la page est prête
    loadMembresData();
});
