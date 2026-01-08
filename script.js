function Enbas() {
  window.scrollBy({
    top: window.innerHeight * 2,
    behavior: 'smooth'
    
  });   
}



let conteneur = document.getElementById("grille-sae");
let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");
let label = document.getElementById("label-semestre");

let listeSAE = Object.keys(SAE);
let semestreActuel = 0;
const SAE_PAR_SEMESTRE = 6;

// Fonction d'affichage
function afficherSemestre() {
    conteneur.innerHTML = ""; // vide la grille

    let debut = semestreActuel * SAE_PAR_SEMESTRE;
    let fin = debut + SAE_PAR_SEMESTRE;

    let saeSemestre = listeSAE.slice(debut, fin);

    saeSemestre.forEach(cleSAE => {
        let numeroSAE = cleSAE.slice(3);

        let lien = document.createElement("a");
        lien.href = "detail.html?sae=" + numeroSAE;
        lien.className = "zone zone-" + numeroSAE;
        lien.textContent = cleSAE.slice(3).replace(".", "-"); 

        conteneur.appendChild(lien);
    });

    label.textContent = "Semestre " + (semestreActuel + 1);

    // Désactiver les flèches quand début ou fin 
    btnPrev.disabled = semestreActuel === 0;
    btnNext.disabled = fin >= listeSAE.length;
}

// Boutons
btnPrev.addEventListener("click", () => {
    if (semestreActuel > 0) {
        semestreActuel--;
        afficherSemestre();
    }
});

btnNext.addEventListener("click", () => {
    if ((semestreActuel + 1) * SAE_PAR_SEMESTRE < listeSAE.length) {
        semestreActuel++;
        afficherSemestre();
    }
});

// Affiche Semestre 1
afficherSemestre();


const loader = document.getElementById("loader");
const video = document.getElementById("loaderVideo");
const content = document.getElementById("content");

video.addEventListener("ended", () => {
  loader.style.display = "none";
  content.style.display = "block"; // 👈 SANS ÇA = ÉCRAN BLANC
});











