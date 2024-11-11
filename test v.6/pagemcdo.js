const images = {
    1: ["image1-1.jpg", "image1-2.jpg", "image1-3.jpg"],
    2: ["image2-1.jpg", "image2-2.jpg", "image2-3.jpg"]
    // Ajouter les autres images pour les dépliants suivants
};

let currentIndex = {1: 0, 2: 0}; // Pour chaque dépliant

function showImage(depliant, index) {
    currentIndex[depliant] = index - 1;
    document.getElementById(`image-${depliant}`).src = images[depliant][currentIndex[depliant]];
}

function prevImage(depliant) {
    if (currentIndex[depliant] > 0) {
        currentIndex[depliant]--;
    } else {
        currentIndex[depliant] = images[depliant].length - 1;
    }
    document.getElementById(`image-${depliant}`).src = images[depliant][currentIndex[depliant]];
}

function nextImage(depliant) {
    if (currentIndex[depliant] < images[depliant].length - 1) {
        currentIndex[depliant]++;
    } else {
        currentIndex[depliant] = 0;
    }
    document.getElementById(`image-${depliant}`).src = images[depliant][currentIndex[depliant]];
}




// Activer/Désactiver les panels avec fermeture des autres
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;

        // Fermer tous les autres panels
        document.querySelectorAll('.panel').forEach(p => {
            if (p !== panel) {
                p.style.display = "none"; // Fermer tous les autres panneaux
            }
        });

        // Basculer l'état du panel cliqué
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});
