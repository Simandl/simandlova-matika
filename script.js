const vyzvy = [
    "Kolik různých PINů lze vytvořit ze čtyř číslic?",
    "Jaká je šance, že dva spolužáci mají stejné narozeniny?",
    "Dokážeš najít tajné číslo pomocí 10 otázek?",
    "Kolik hesel dlouhých 8 znaků lze vytvořit?",
    "Napiš program pro výpočet délky jména."
];

const btn = document.getElementById("challengeBtn");
const text = document.getElementById("challengeText");

btn.addEventListener("click", () => {

    const index =
        Math.floor(Math.random() * vyzvy.length);

    text.innerHTML = vyzvy[index];

});
