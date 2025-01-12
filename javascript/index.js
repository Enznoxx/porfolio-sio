// Sélectionner l'élément "Qui suis-je ?" et le contenu
const toggleText = document.getElementById('toggle-text');
const content = document.getElementById('content');

// Ajouter un événement au clic sur "Qui suis-je ?"
toggleText.addEventListener('click', function() {
    // Vérifier si le cadre est caché
    if (content.classList.contains('hidden')) {
        // Si oui, on le montre
        content.classList.remove('hidden');
    } else {
        // Sinon, on le cache
        content.classList.add('hidden');
    }
});

