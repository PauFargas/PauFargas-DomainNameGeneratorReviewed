let pronoun = ['the', 'our','his'];
let adj = ['great', 'big', 'last'];
let noun = ['jogger', 'racoon', 'samurai'];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let domain = pronoun[i] + adj[j] + noun[k] + ".com";
      console.log(domain);
    }
  }
}