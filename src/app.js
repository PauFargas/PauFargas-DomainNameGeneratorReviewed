// Importaciones de bootstrap y estilos
import "bootstrap";
import "./style.css";

//Importaciones de elementos
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Combinaciones
const pronouns = ["the", "our"];
const adjectives = ["great", "big"];
const nouns = ["jogger", "racoon"];

//Función para generar los nombres de dominios
function generateDomainNames() {
  const generatedDomainNames = [];

  for (let i = 0; i < pronouns.length; i++) {
    //Agarra el primer pronombre
    for (let j = 0; j < adjectives.length; j++) {
      //Agarra el primer adjetivo
      for (let k = 0; k < nouns.length; k++) {
        //Agarra el primer nombre
        const domainName = `${pronouns[i]}${adjectives[j]}${nouns[k]}.com`;
        generatedDomainNames.push(domainName); //Los junta y los añade
      }
    }
  }
  document.getElementById(
    "domainNamesList"
  ).innerHTML = generatedDomainNames.join("<br>"); //Se muestran aquí, el <br> es para saltar línea. Repite el proceso hasta hacer toda la combinación posible.
  return generatedDomainNames;
}

window.onload = function() {
  //WindowOnload para que lo haga cada vez que se recarga la página.
  generateDomainNames();
};
