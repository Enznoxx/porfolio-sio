// Fonction pour basculer l'affichage du contenu caché
function toggleContent(id) {
    var content = document.getElementById(id);
    content.classList.toggle('hidden');
}

// Lors du chargement complet du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les titres cliquables qui doivent afficher/masquer du contenu
    const toggleButtons = document.querySelectorAll('[id^="toggle-text-"]');  // Tous les titres cliquables
    
    toggleButtons.forEach(button => {
        // Extraire l'ID du contenu associé au bouton (en enlevant le préfixe 'toggle-text-')
        const contentId = 'content-' + button.id.split('-').slice(2).join('-');  // Génère le bon ID pour le contenu

        // Vérifier si l'élément de contenu existe avant d'ajouter l'événement
        const content = document.getElementById(contentId);
        if (content) {
            // Ajouter un gestionnaire d'événements pour chaque titre
            button.addEventListener('click', function() {
                toggleContent(contentId);  // Appeler la fonction pour afficher/masquer le contenu
            });
        }
    });
});
