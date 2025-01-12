// Récupère les éléments des titres
const toggleTextFormation1 = document.getElementById('toggle-text-formation1');
const toggleTextFormation2 = document.getElementById('toggle-text-formation2');

// Récupère les sections de contenu à afficher/masquer
const contentFormation1 = document.getElementById('content-formation1');
const contentFormation2 = document.getElementById('content-formation2');

// Ajoute un événement pour afficher/masquer le contenu de la première formation
toggleTextFormation1.addEventListener('click', () => {
    contentFormation1.classList.toggle('hidden');
});

// Ajoute un événement pour afficher/masquer le contenu de la deuxième formation
toggleTextFormation2.addEventListener('click', () => {
    contentFormation2.classList.toggle('hidden');
});
