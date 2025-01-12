// Fonction pour basculer l'affichage du contenu caché
function toggleContent(id) {
    var content = document.getElementById(id);
    content.classList.toggle('hidden');
}

// Lors du chargement complet du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le titre principal "Stage : Institut Mines-Télécom"
    const formationButton = document.getElementById("toggle-text-formation1");
    formationButton.addEventListener('click', function() {
        // Afficher ou masquer le contenu principal
        toggleContent("content-formation1");
    });

    // Sélectionner le bouton "Les deux grandes écoles"
    const telecomSudParisButton = document.getElementById("toggle-text-telecom-sud-paris");
    telecomSudParisButton.addEventListener('click', function() {
        // Afficher les deux écoles
        toggleContent("content-telecom-sud-paris");
        toggleContent("content-imt-bs");
    });

    // Sélectionner le bouton "Télécom Sud-Paris"
    const telecomSudParisDetailsButton = document.getElementById("toggle-text-telecom-sud-paris-details");
    telecomSudParisDetailsButton.addEventListener('click', function() {
        // Afficher uniquement la section de Télécom Sud-Paris
        toggleContent("content-telecom-sud-paris");
    });

    // Sélectionner le bouton "Institut Mines-Télécom Business School"
    const imtBsButton = document.getElementById("toggle-text-imt-bs");
    imtBsButton.addEventListener('click', function() {
        // Afficher uniquement la section IMT-BS
        toggleContent("content-imt-bs");
    });
});

