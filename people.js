console.log("ciao");
const functionHobbies = require("./hobbies")

let array = functionHobbies("calcio","cinema","nuoto")

console.log(array);

const nameObj = require("./names")

const person = nameObj("Ciro", "Rossi")

console.log(person);



const oggetto = () => {
    return {
        name: person.nome,
        cognome: person.cognome,
        hobby: array
    }
}

console.log(oggetto());
