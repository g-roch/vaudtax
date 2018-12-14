// onglet_actif: Numéro de l'onglet sélectionné
// nbrOnglet: Nombre total d'onglet
  
function afficheOnglet(onglet_actif,nbrOnglet)
{
// On masque tous les contenus des onglets
for (var i = 1; i <= nbrOnglet; i++)
document.getElementById("contenuOnglet" + i).style.display = "none";

// On affecte le style "onglet_off" à tous les onglets
for (var i = 1; i <= nbrOnglet; i++)
document.getElementById('onglet_'+ i).className = 'onglet_off onglet';

// On affiche le contenu sélectionné et on affecte le style "onglet_on" à l'onglet sélectionné
document.getElementById('onglet_'+ onglet_actif).className = 'onglet_on onglet';
document.getElementById("contenuOnglet" + onglet_actif).style.display = "block";
}