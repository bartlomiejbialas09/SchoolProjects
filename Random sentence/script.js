const subjects = ["Bartek", "Piotrek", "Michał", "Adam", "Kuba", "Dawid", "Alan", "Małpka", "Kosmita"]
const predicates = ["maluje", "zjada", "podnosi", "ogląda", "rozbija", "czyta", "słucha"] 
const objects = ["talerze", "mszyce", "stołek", "obrazy", "alpaki", "pudełka", "ściany", "płytę", "arbuzy"]

function Button1() {
    let subject = subjects[Math.floor(Math.random() * subjects.length)]
    let predicate = predicates[Math.floor(Math.random() * predicates.length)]
    let object = objects[Math.floor(Math.random() * objects.length)]
    document.getElementById("header1").innerHTML = subject + " " + predicate + " " + object + "."
}



function Button2() {
    let words = subjects.concat(predicates, objects)

    let size = document.getElementById("inputLength").value
    let sentence = ""
    for (let i = 0; i < size; i++) {
        let word = words[Math.floor(Math.random() * words.length)]
        sentence += word
        if(i < size -1) {
            sentence += " "
        }
        else {
            sentence += "."
        }
    }
     document.getElementById("header2").innerHTML = sentence
}