/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronouns = ["the", "our"];
const adjectives = ["great", "big"];
const nouns = ["jogger", "racoon"];

function generateDomainNames() {
  const domainNames = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        const domainName = `${pronouns[i]}${adjectives[j]}${nouns[k]}.com`;
        domainNames.push(domainName);
      }
    }
  }
  document.getElementById("domainNamesList").innerHTML = domainNames.join(
    "<br>"
  );
  return domainNames;
}

window.onload = function() {
  generateDomainNames();
};
