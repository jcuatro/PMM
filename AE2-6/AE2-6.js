let users = ["Antonio", "Maria", "Mortadelo", "Filemon", "Antonia"];
let blacklisted = ["Filemon", "Antonio"];

let notBanned = users.filter(X => !blacklisted.includes(X))

console.log(notBanned);
