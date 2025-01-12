// Sélectionner l'élément du titre cliquable et le contenu à afficher/masquer
const toggleTextFormation1 = document.getElementById('toggle-text-formation1');
const contentFormation1 = document.getElementById('content-formation1');

// Ajouter un gestionnaire d'événements pour le clic sur le titre
toggleTextFormation1.addEventListener('click', function() {
    // Basculer la classe 'hidden' sur le cadre pour le rendre visible ou caché
    contentFormation1.classList.toggle('hidden');
});
