const vyzvy = [
    "Kolika otázkami dokážeš najít tajné tříciferné číslo?",
    "Jaká je šance, že dva studenti mají stejné narozeniny?",
    "Kolik různých PINů lze vytvořit ze 4 číslic?",
    "Napiš program, který spočítá počet samohlásek ve jméně.",
    "Dokážeš rozdělit 20 studentů do čtyř skupin po pěti?",
    "Jaká je pravděpodobnost, že si sedneš vedle svého nejlepšího kamaráda?"
];

document.getElementById("challengeBtn")
.addEventListener("click", function() {

    const index =
        Math.floor(Math.random() * vyzvy.length);

    document.getElementById("challengeText")
        .innerText = vyzvy[index];
});
