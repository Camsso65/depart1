// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];
if( depensesSemaine === 0) {
  console.log(0)
}
else {

}
// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  let a = 0
  for (let i=0; i<depensesSemaine.length; i++ ) {
  a = depensesSemaine[i] + a; }

  return a;
}
const total = calculerTotal(depensesSemaine);
console.log(`total:${total} F CFA`);


// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.


function calculerMoyenne(total) {

    if (depensesSemaine.length === 0) return 0;
const totals = calculerTotal(depensesSemaine);
    return totals / depensesSemaine.length;
}

   let moyenne = calculerMoyenne(total) 
   console.log(`moyenne: ${moyenne.toFixed(2)} FCFA`);

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.

const filtragedepenses = depensesSemaine.filter(function filtrerGrossesDepenses(depenses)

{
  return depenses>2000;
})
console.log(`Les depenses au-dessus de 2000 F CFA sont:  ${filtragedepenses}`);


// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
   return depenses.length ? Math.max(...depenses) : 0;

}

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
console.log(`Maximum : ${trouverMaximum(depensesSemaine)} F CFA`);
