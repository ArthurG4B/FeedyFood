// Fonction pour afficher la cartouche sélectionnée
function showCartouche(cartoucheId) {
    // Cache toutes les cartouches avant d'en afficher une
    const cartouches = document.querySelectorAll('.cartouche');
    cartouches.forEach(cartouche => {
        cartouche.style.display = 'none';
    });

    // Affiche la cartouche avec l'ID spécifié
    const selectedCartouche = document.getElementById(cartoucheId);
    if (selectedCartouche) {
        selectedCartouche.style.display = 'block';
    }
}