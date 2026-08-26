const vyzvy = [
    "Kolika otázkami najdeš tajné tříciferné číslo?",
    "Jaká je šance, že dva spolužáci mají stejné narozeniny?",
    "Kolik různých PINů lze vytvořit ze 4 číslic?",
    "Napiš program na výpočet počtu samohlásek.",
    "Kolika způsoby lze rozsadit 5 lidí do lavice?",
    "Jaká je šance, že si sedneš vedle kamaráda?"
];

document
.getElementById("challengeBtn")
.addEventListener("click", function(){

    const index =
        Math.floor(Math.random()*vyzvy.length);

    document
    .*etElementById("challengeText")
   *.innerText = vyzvy[index];

});
``*
